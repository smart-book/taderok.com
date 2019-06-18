import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
    selector: 'app-animations',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        'use strict';
        $(function () {
            $('.js-animations').on('change', function () {
                var animation = $(this).val();
                $('.js-animating-object').animateCss(animation);
            });
            initBasicSelect();
        });

        //Copied from https://github.com/daneden/animate.css
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
        function initBasicSelect() {
            /* basic select start*/
            $('select').formSelect();
            $('#sel').formSelect();
            /* basic select end*/
        }
    }

}
