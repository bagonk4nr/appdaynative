// import * as React from 'react';
import CheckIsInt from '../_lib/checkisint';
import sanitizeHtml from 'sanitize-html';

class Menu  {
    dataMenu: any;
    valueFromJson: any;
    jmlhButton: any;
    newArr: Array<any> = [];
    noSanitizeHtml: sanitizeHtml;

    checkIsInt = new CheckIsInt();

    dataForMenu(value: any) {
        this.dataMenu = value;
        this.jmlhButton =  parseInt(value[0].jmlhbutton); //tempat merubah jumlah button
        this.countMenu();

    }

    countMenu() {

        let s = 0;
        for (let i = 0; i < this.dataMenu.length; i++) {
            if (this.checkIsInt.isInt(i / this.jmlhButton) === 1 ) {

                this.newArr[s] = i;
                s++;
            } else {
                this.newArr[s] = i;

            }
        }

        return this.newArr;
    }

   htmlMenu() {
        let k = 0;
        let f = 0;
        let t = 0;
        let btnx = '';
        let btn1 = '';
        let getHtml = '';
        // console.log(this.newArr);
        // console.log(this.newArr.length);
        for (let a = 0; a < this.newArr.length; a++ ) {

            for (let b = 0; b < this.dataMenu.length; b++ ) {

                if (k >= this.newArr[a]) {
                    f = k;
                } else {
                    f = b;
                }

                if ( f <= this.newArr[a]) {

    // tslint:disable-next-line:max-line-length
    btnx += '<button (click)= "' + this.dataMenu[k].links + '" class="glass"  > <i class="iconfont ' + this.dataMenu[k].icon + '"> </i> <span class="btnfont ">' + this.dataMenu[k].menu + '</span></button> &emsp;';


                    // console.log(t - this.newArr[a] + ' - ' + this.newArr.length + ' - ' + this.newArr[a]);
                    // console.log( this.newArr.length - 2 + ' - ' + this.newArr.length + ' - ' + this.newArr[a]);

                    if ( t - this.newArr[a] > 0 && a >= this.newArr.length - 2 ) {
                        btn1 = '';
                        btn1 = btnx;
                    } else if (this.newArr.length !== t && t - this.newArr[a] > 0  && a >= this.newArr.length - 2 ) {
                        btn1 = '';
                        btn1 = btnx;

                    }



                    if (this.checkIsInt.isInt(f / this.jmlhButton) === 1) {


                        getHtml += '<div class="card card-bg" >';
                        getHtml += '<div class="card-content">';
                        getHtml += '<div class="card-body">';
                        getHtml += '<div class="row">';
                        getHtml += '<table style="display: block;">';
                        getHtml += '<td style="left: 5%; position: relative; ">';
                        getHtml +=  btnx;
                        getHtml += '</td>';
                        getHtml += '</table>';
                        getHtml += '</div>';
                        getHtml += '</div>';
                        getHtml += '</div>';
                        getHtml += '</div>';

                        btn1 = '';
                        btnx = '';
                        if (this.jmlhButton === 1) { this.jmlhButton = 2; }

                         t = (this.newArr.length * this.jmlhButton) ;

                    } else if ((t - this.newArr[a]) < this.jmlhButton && f === this.newArr[a]) {

                        getHtml += '<div class="card card-bg" >';
                        getHtml += '<div class="card-content">';
                        getHtml += '<div class="card-body">';
                        getHtml += '<div class="row">';
                        getHtml += '<table class="mx-auto" style="margin-left: auto; display: flex;">';
                        getHtml += '<td style="vertical-align: center; text-align: center;">';
                        getHtml +=  btn1;
                        getHtml += '</td>';
                        getHtml += '</table>';
                        getHtml += '</div>';
                        getHtml += '</div>';
                        getHtml += '</div>';
                        getHtml += '</div>';

                        btnx = '';
                    }
                    k++;

                }

                if (f === this.newArr[a]) {
                    getHtml += ' <br/>';
                }
            }
        }

        return this.noSanitizeHtml(getHtml);
    }
}

export default Menu;
