import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SpecialPointsFormMatDialogService {

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public createSpecialAddressesForm(): FormGroup {
    return this.formBuilder.group({
      [SpecialPointsAddressesFormControlsName.TYPE_ADDRESS]: this.formBuilder.control('', {validators: [Validators.required]}),
      [SpecialPointsAddressesFormControlsName.PLANET]: this.formBuilder.control('', {validators: [Validators.required]}),
      [SpecialPointsAddressesFormControlsName.POSTAL_CODE]: this.formBuilder.control('', {validators: [Validators.required]}),
      [SpecialPointsAddressesFormControlsName.CITY]: this.formBuilder.control('', {validators: [Validators.required]}),
      [SpecialPointsAddressesFormControlsName.STREET]: this.formBuilder.control('', {validators: [Validators.required]}),
      [SpecialPointsAddressesFormControlsName.BUILDING_NUMBER]: this.formBuilder.control('', {validators: [Validators.required]}),
      [SpecialPointsAddressesFormControlsName.ROOM]: this.formBuilder.control(''),
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
