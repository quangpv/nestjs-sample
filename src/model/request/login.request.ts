import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class LoginRequest {
  @ApiModelProperty() email: string;
  @ApiModelProperty() password: string;
}
