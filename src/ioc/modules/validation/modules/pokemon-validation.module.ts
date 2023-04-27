import { ContainerModule } from 'inversify'
import { ValidationTypes } from '~/ioc/types/validation'
import { Validation } from '~/presentation/common/protocols'
import { ValidationBuilder, ValidationComposite } from '~/validation/validators'

export const PokemonValidationModule = new ContainerModule((bind) => {
  bind<Validation>(ValidationTypes.POKEMON.EDIT_FORM).toConstantValue(
    ValidationComposite.build([
      ...ValidationBuilder.field('name').required().build()
    ])
  )
})
