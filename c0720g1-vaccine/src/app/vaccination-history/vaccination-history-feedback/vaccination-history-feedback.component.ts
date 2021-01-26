import {Component, OnInit} from '@angular/core';
import {VaccinationHistoryService} from "../../service/vaccination-history.service";
import {IVaccinationHistoryFeedbackDTO} from "../../dto/IVaccinationHistoryFeedbackDTO";
import {ActivatedRoute, ParamMap, Router, Routes} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IVaccinationHistorySendFeedbackDTO} from "../../dto/IVaccinationHistorySendFeedbackDTO";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-vaccination-history-feedback',
  templateUrl: './vaccination-history-feedback.component.html',
  styleUrls: ['./vaccination-history-feedback.component.scss']
})
export class VaccinationHistoryFeedbackComponent implements OnInit {
  vaccinationHistoryFeedback: IVaccinationHistoryFeedbackDTO;
  formGroup: FormGroup;
  vaccinationHistoryId;

  constructor(
    private vaccinationHistoryService: VaccinationHistoryService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      afterStatus: ['', Validators.pattern('^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ,;-]+(\\s[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ,;-]+)*$')]
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.vaccinationHistoryService.findByIdVaccinationHistory(paramMap.get('id')).subscribe((data: IVaccinationHistoryFeedbackDTO) => {
        this.vaccinationHistoryId = paramMap.get('id');
        this.vaccinationHistoryFeedback = data;
      });
      this.vaccinationHistoryService.findByAfterStatus(paramMap.get('id')).subscribe((data: IVaccinationHistorySendFeedbackDTO) => {
        this.formGroup.patchValue(data);

      });
    });
  }

  update() {
    console.log(this.vaccinationHistoryId);
    console.log(this.formGroup.value);
    this.vaccinationHistoryService.updateFeedback(this.vaccinationHistoryId, this.formGroup.value).subscribe(
      () => this.router.navigateByUrl('vaccination-history').then(r => this.toast.success("Cảm ơn bạn đã gửi phản hồi đến chúng tôi!")));

  }

  validation_messages = {
    'afterStatus': [
      {type: 'pattern', message: 'Phản hồi không được chứa kí tự đặc biệt!'}
    ],
  }
}
