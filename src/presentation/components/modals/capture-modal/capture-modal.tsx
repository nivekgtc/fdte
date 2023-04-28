import { BaseModalLayout } from "../../layouts"

type Props = {
  visible: boolean // TODO - migrate to redux
}

const CaptureModal = ({visible}: Props) => {

  if (!visible) return null

  return <BaseModalLayout imageType="defaultPk">
    
  </BaseModalLayout>
}

export default CaptureModal