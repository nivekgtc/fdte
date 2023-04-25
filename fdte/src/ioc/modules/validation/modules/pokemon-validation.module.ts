import { ContainerModule } from 'inversify'
import { ValidationTypes } from '~/ioc/types/validation'
import { ValidationBuilder, ValidationComposite } from '~/validation/validators'
import { Validation } from '~/../fdte/src/presentation/common/protocols'

export const PokemonValidationModule = new ContainerModule((bind) => {
  bind<Validation>(ValidationTypes.POKEMON.EDIT_FORM).toConstantValue(
    ValidationComposite.build([
      ...ValidationBuilder.field('name').email().required().build()
    ])
  )
})
