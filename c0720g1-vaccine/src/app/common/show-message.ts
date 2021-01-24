import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';

@Injectable( {
  providedIn: 'root'
})

export class ShowMessage {
  constructor(private toastr: ToastrService) {
  }

  showMessageCreateSuccessfully() {
    this.toastr.success('Thêm mới thành công', 'Thêm mới');
  }


  showMessageNotFound() {
    this.toastr.warning('Không tìm thấy', 'Tìm kiếm');
  }
}
