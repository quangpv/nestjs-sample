import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ChangePasswordRequest {
  @ApiModelProperty() email: string;
  @ApiModelProperty() oldPassword: string;
  @ApiModelProperty() newPassword: string;
  @ApiModelProperty() confirmNewPassword: string;
}
