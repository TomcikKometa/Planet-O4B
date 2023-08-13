import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class SpecialPointsFormMatDialogService {

  private static readonly POSTAL_CODE_PATTERN : string = '^[0-9]{2}-[0-9]{3}';

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public createSpecialAddressesForm(): FormGroup {
    return this.formBuilder.group({
      [SpecialPointsAddressesFormControlsName.TYPE_ADDRESS]: this.formBuilder.control('', {validators: [Validators.required], updateOn: 'blur'}),
      [SpecialPointsAddressesFormControlsName.PLANET]: this.formBuilder.control('', {validators: [Validators.required], updateOn:'blur'}),
      [SpecialPointsAddressesFormControlsName.POSTAL_CODE]: this.formBuilder.control('', {validators: [Validators.required, Validators.pattern(SpecialPointsFormMatDialogService.POSTAL_CODE_PATTERN)], updateOn:'blur'}),
      [SpecialPointsAddressesFormControlsName.CITY]: this.formBuilder.control('', {validators: [Validators.required], updateOn:'blur'}),
      [SpecialPointsAddressesFormControlsName.STREET]: this.formBuilder.control('', {validators: [Validators.required], updateOn:'blur'}),
      [SpecialPointsAddressesFormControlsName.BUILDING_NUMBER]: this.formBuilder.control('', {validators: [Validators.required], updateOn:'blur'}),
      [SpecialPointsAddressesFormControlsName.ROOM]: this.formBuilder.control('', {updateOn:'blur'} ),
    });
  }
}

export enum SpecialPointsAddressesFormControlsName {
  TYPE_ADDRESS = 'type_Address',
  PLANET = 'planet',
  POSTAL_CODE = 'postal_code',
  CITY = 'city',
  STREET = 'street',
  BUILDING_NUMBER = 'building_number',
  ROOM = 'room'

}
