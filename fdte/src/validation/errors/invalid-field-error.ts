import { ValidationErrorType } from '~/../fdte/src/presentation/common/protocols'
import { ValidationError } from '../protocols'

export class InvalidFieldError extends ValidationError {
  constructor(error: ValidationErrorType) {
    super('InvalidFieldError', error)
  }
}
