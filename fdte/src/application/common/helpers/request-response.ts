import {
  AccessDeniedError,
  FormError,
  InvalidCredentialsError,
  UnexpectedError,
  UnprocessableEntityError
} from '~/domain/common/exceptions'
import { Response, ResponseError } from '~/domain/common/types'
import {
  CombinedPredicated,
  combinedPredicates,
  error,
  success
} from '~/domain/common/utils'
import { HttpResponse, HttpStatusCode } from '~/../fdte/src/application/protocols/http'

export class RequestResponse<R> {
  private constructor(private readonly _response: R | undefined) {
    Object.freeze(this)
  }

  public static handle<R>(
    httpResponse: HttpResponse<R>
  ): Response<RequestResponse<R>> {
    const { statusCode } = httpResponse

    if (this.isSuccess(statusCode)) {
      return success(new RequestResponse(httpResponse.body))
    }

    const predicates: CombinedPredicated<HttpStatusCode, ResponseError> = [
      [this.isForbidden, new AccessDeniedError()],
      [
        this.isUnauthorized,
        new InvalidCredentialsError(httpResponse.body?.errors)
      ],
      [this.isFormError, new FormError(httpResponse?.body?.errors)],
      [
        this.isUnprocessableEntity,
        new UnprocessableEntityError(httpResponse?.body?.errors)
      ]
    ]

    const errors = combinedPredicates({
      value: statusCode,
      predicatePairs: predicates
    })

    if (errors.isError()) {
      return error(errors.value)
    }

    return error(new UnexpectedError())
  }

  private static isSuccess(statusCode: HttpStatusCode): boolean {
    return statusCode >= 200 && statusCode <= 299
  }

  private static isForbidden(statusCode: HttpStatusCode): boolean {
    return statusCode === HttpStatusCode.forbidden
  }

  private static isUnauthorized(statusCode: HttpStatusCode): boolean {
    return statusCode === HttpStatusCode.unauthorized
  }

  private static isFormError(statusCode: HttpStatusCode): boolean {
    return statusCode === HttpStatusCode.formError
  }

  private static isUnprocessableEntity(statusCode: HttpStatusCode): boolean {
    return statusCode === HttpStatusCode.unprocessableEntity
  }

  get response(): R | undefined {
    return this._response
  }
}
