import { FieldValidation } from '~/validation/protocols'
import {
  RequiredFieldValidation,
  EmailValidation,
  MinLegthValidation,
  CompareFieldsValidation,
  MaxLengthValidation,
  PasswordStrengthValidation,
  URLValidation
} from '~/validation/validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min(length: number): ValidationBuilder {
    this.validations.push(new MinLegthValidation(this.fieldName, length))
    return this
  }

  max(length: number): ValidationBuilder {
    this.validations.push(new MaxLengthValidation(this.fieldName, length))
    return this
  }

  sameAs(fieldToCompare: string): ValidationBuilder {
    this.validations.push(
      new CompareFieldsValidation(this.fieldName, fieldToCompare)
    )
    return this
  }

  password(): ValidationBuilder {
    this.validations.push(new PasswordStrengthValidation(this.fieldName))
    return this
  }

  url(): ValidationBuilder {
    this.validations.push(new URLValidation(this.fieldName))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
