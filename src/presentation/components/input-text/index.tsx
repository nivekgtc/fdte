import { Control, Controller } from "react-hook-form";
import * as S from "./styled";
import { Fragment } from "react";
import { ValidationErrorType } from "~/presentation/common/protocols";

type InputProps = {
  className: string
  label: string
  type: string
  placeholder: string
  name: string
}

type Props = InputProps & {
  name: string
  control?: Control<any>
}

const InputText = ({ className, label, type, placeholder, name, control, ...inputProps }: Props) => (
  <Fragment>
    {
      control ?  
        <Controller
          name={name}
          control={control}
          defaultValue=''
          render={({ field, fieldState: { error, invalid } }) => {
            const errorState = error as unknown as ValidationErrorType

            const errorMessage = errorState?.name || ''
            const errorOption = errorState?.option
            
            return (
              <S.InputTextWrapper className={className} {...inputProps}>
                {label && <S.Label>{label}</S.Label>}

                <S.Input type={type} placeholder={placeholder} name={name} />
              </S.InputTextWrapper>
            )
          }}
        /> : 
          <S.InputTextWrapper className={className}>
            {label && <S.Label>{label}</S.Label>}

            <S.Input type={type} placeholder={placeholder} name={name} />
          </S.InputTextWrapper>
    }
  </Fragment>
);

export default InputText;
