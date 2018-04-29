"use strict";
        $(document).ready(function() {
            //mouse moves over and font bolds
            $(".even").mouseenter(function() {
                $(this).css("font-weight", "bold");
            });
            //mouse leaves and font goes to normal
            $(".even").mouseleave(function() {
                $(this).css("font-weight", "normal");
            });
            //click and it turns blue
            $(".odd").click(function() {
                $(this).css("color", "blue")
            });
            //double click and it turns yellow
            $(".odd").dblclick(function() {
                $(this).css("color", "yellow")
            });

        });