//$(document).ready(function(){
//$( "button" ).click(function() {
//$("h1, h2, p").ToggleClass(active);




// $(document).ready(function(){
//     $("button").click(function(){
//         $(this).hide();
//     });
// });
// //-------------------------------------
// $('#run2').hide();
// $('a').on('click',
//   function() {
//   $('#run1, #run2').toggle(200);
// });

$('#run2').hide();
$('a').on('click',
  function() {
  $("#run2").show(), $("#run1").hide(), $("run1").removeClass("jumbotron")
});




//$("#n-start").hide(), $("#n-gender-age").show(), $("#form-container").removeClass("is-6 is-offset-1"), $("#form-container").addClass("is-4")
// })

//
// $("#n-start").hide(), $("#n-gender-age").show(), $("#form-container").removeClass("is-6 is-offset-1"), $("#form-container").addClass("is-4")
// }), $(".answer:not(#start)").click(function() {
// errorMsg = "", i = 0, currentNode = $(this).closest(".node").attr("id"), qId = $(this).closest(".question").attr("id"), qName = $("#" + qId).attr("data-qName"), qInput = $("#" + qId).attr("data-qInput"), qValue = $(this).attr("data-qValue"), nextNode = "variable" == $("#" + qId).attr("data-nextNode") ? $(this).attr("data-nextNode") : $("#" + qId).attr("data-nextNode"), $("#" + qId + " .answer-text").removeClass("selected").addClass("notselected"), $(".answer-text", this).removeClass("notselected").addClass("selected"), "start" != qName && $("#" + qInput).val(qValue), "conditional" == nextNode && (nextNode = window[$("#" + qId).attr("data-gotoCondition")]()), "multi" != nextNode && ($("#" + currentNode).hide(), $("#" + nextNode).show(), window.scrollTo(0, 0), gtmTrack(nextNode))
// }), $(".sub-click:not(#finalsubmit)").click(function() {
// $(this).hide(), $(".has-error").removeClass("has-error"), errorMsg = "", i = 0, currentNode = $(this).closest(".node").attr("id"), $("#" + currentNode + " .loading").show(), nextNode = $(this).attr("data-nextNode"), "conditional" == nextNode && (nextNode = window[$(this).attr("data-gotoCondition")]()), $("#" + currentNode + " .question").each(function() {
//     qInput = $(this).attr("data-qInput"), qName = $(this).attr("data-qName"), "formInput" != qInput ? (qValue = $("#" + qInput).val(), qValidation = $(this).attr("data-validate"), "none" != qValidation && (isValid = window[qValidation](qInput, qValue, qName)), 1 != isValid && i++) : $(":input", this).each(function() {
//         qInput = $(this).attr("id"), qValue = $(this).val(), qValidation = $(this).attr("data-validate"), "none" != qValidation && (isValid = window[qValidation](qInput, qValue, qName)), 1 != isValid && i++
//     })




//$(document).ready(function(){
    //$(".jumbotron btn").click(function(){
    //    $(this).hide();
  //  });

//------------------------------------
//  function myFunction() {
  //    var x = document.getElementById("myDIV");
    //  if (x.innerHTML === "Hello") {
      //    x.innerHTML = "Swapped text!";
    //} //else {
        //  x.innerHTML = "Hello";
      //}
  //}

  //
  // function gtmTrack(e) {
  //     dataLayer.push({
  //         event: "questionAnswered",
  //         questionName: e
  //     })
  // }
  //
  // function notEmpty(e, t, a) {
  //     return "" != $("#" + e).val() || (errorMsg = errorMsg + "Please enter " + a + " correctly.\n", $("#" + e).parent().addClass("has-error"), !1)
  // }
  //
  // function validateEmail(t, a, e) {
  //     return "" != $("#" + t).val() ? ($.ajax({
  //         type: "POST",
  //         async: !1,
  //         url: "/webcommon/val/xverify-email.php",
  //         data: {
  //             email: a,
  //             source: $("#domain-source").val()
  //         },
  //         success: function(e) {
  //             response = e.email.responsecode, "1" == response ? ("true" == e.email.auto_correct.corrected ? emailAdd = e.email.auto_correct.address : emailAdd = a, emailGood = !0) : (errorMsg += "Please enter a valid Email Address.\n", emailGood = !1, $("#" + t).parent().addClass("has-error"))
  //         }
  //     }), emailGood) : (errorMsg += "Please enter a valid Email Address.\n", $("#" + t).parent().addClass("has-error"), !1)
  // }
  //
  // function questNum() {
  //     qNum = 1, $(".question").each(function() {
  //         $(this).attr("id", "q" + qNum), qNum++
  //     })
  // }
  // errorMsg = "", $(document).ready(function() {
  //     gtmTrack("landing"), questNum(), $("#start").click(function() {
  //         $("#n-start").hide(), $("#n-gender-age").show(), $("#form-container").removeClass("is-6 is-offset-1"), $("#form-container").addClass("is-4")
  //     }), $(".answer:not(#start)").click(function() {
  //         errorMsg = "", i = 0, currentNode = $(this).closest(".node").attr("id"), qId = $(this).closest(".question").attr("id"), qName = $("#" + qId).attr("data-qName"), qInput = $("#" + qId).attr("data-qInput"), qValue = $(this).attr("data-qValue"), nextNode = "variable" == $("#" + qId).attr("data-nextNode") ? $(this).attr("data-nextNode") : $("#" + qId).attr("data-nextNode"), $("#" + qId + " .answer-text").removeClass("selected").addClass("notselected"), $(".answer-text", this).removeClass("notselected").addClass("selected"), "start" != qName && $("#" + qInput).val(qValue), "conditional" == nextNode && (nextNode = window[$("#" + qId).attr("data-gotoCondition")]()), "multi" != nextNode && ($("#" + currentNode).hide(), $("#" + nextNode).show(), window.scrollTo(0, 0), gtmTrack(nextNode))
  //     }), $(".sub-click:not(#finalsubmit)").click(function() {
  //         $(this).hide(), $(".has-error").removeClass("has-error"), errorMsg = "", i = 0, currentNode = $(this).closest(".node").attr("id"), $("#" + currentNode + " .loading").show(), nextNode = $(this).attr("data-nextNode"), "conditional" == nextNode && (nextNode = window[$(this).attr("data-gotoCondition")]()), $("#" + currentNode + " .question").each(function() {
  //             qInput = $(this).attr("data-qInput"), qName = $(this).attr("data-qName"), "formInput" != qInput ? (qValue = $("#" + qInput).val(), qValidation = $(this).attr("data-validate"), "none" != qValidation && (isValid = window[qValidation](qInput, qValue, qName)), 1 != isValid && i++) : $(":input", this).each(function() {
  //                 qInput = $(this).attr("id"), qValue = $(this).val(), qValidation = $(this).attr("data-validate"), "none" != qValidation && (isValid = window[qValidation](qInput, qValue, qName)), 1 != isValid && i++
  //             })
  //         }), 0 < i ? (alert(errorMsg), $("#" + currentNode + " .loading").hide(), $("#" + currentNode + " .sub-btn").show()) : "n-offers" == nextNode ? ($("#" + currentNode + " .loading").hide(), $("#" + currentNode + " .sub-btn").hide(), $("#" + nextNode).slideDown("slow")) : ($(".node:visible").hide(), $("#" + nextNode).show(), window.scrollTo(0, 0), gtmTrack(nextNode))
  //     }), $("#finalsubmit").click(function() {
  //         $(".has-error").removeClass("has-error"), $("#finalsubmit .fas").removeClass("fa-angle-right").addClass("fa-spinner"), errorMsg = "", i = 0, currentNode = $(this).closest(".node").attr("id"), console.log(currentNode), $("#" + currentNode + " .question").each(function() {
  //             qName = $(this).attr("data-qName"), $(":input", this).each(function() {
  //                 qInput = $(this).attr("id"), qValue = $(this).val(), qValidation = $(this).attr("data-validate"), "none" != qValidation && (isValid = window[qValidation](qInput, qValue, qName), 1 != isValid ? (i++, console.log(qName + ": false")) : console.log(qName + ": true"))
  //             })
  //         }), 0 < i ? (alert(errorMsg), $("#finalsubmit .fas").removeClass("fa-spinner").addClass("fa-angle-right")) : ($.ajaxSetup({
  //             jsonp: null,
  //             jsonpCallback: null
  //         }), $.ajax({
  //             method: "POST",
  //             type: "POST",
  //             url: "/webcommon/php/post.php",
  //             data: {
  //                 v: "6",
  //                 email: emailAdd,
  //                 source: $("#source").val(),
  //                 netid: $("#ref").val(),
  //                 ip_address: $("#userip").val(),
  //                 c1: $("#c1").val(),
  //                 c2: $("#c2").val(),
  //                 c3: $("#c3").val(),
  //                 pubid: $("#pubid").val(),
  //                 sid: $("#sid").val(),
  //                 hid: $("#hid").val()
  //             },
  //             timeout: 1e4,
  //             error: function(e) {
  //                 console.log(e), alert("We could not submit the form at this time. Please try again."), $("#finalsubmit").removeClass("fa-spinner").addClass("fa-angle-right")
  //             },
  //             success: function(e) {
  //                 dataLayer.push({
  //                     event: "conversion",
  //                     flowName: "/flowtest",
  //                     sid: $("#sid").val(),
  //                     hid: $("#hid").val(),
  //                     px: $("#px").val(),
  //                     eventCallback: function() {
  //                         gtmTrack("ty"), $("#n-email-submit").hide(), $("#n-ty").show(), setTimeout(function() {
  //                             window.location.href = "http://www.resilientscript.com/rd/r.php?sid=4231&" + $("#hpqstring").val()
  //                         }, 5e3)
  //                     }
  //                 })
  //             }
  //         }))
  //     })
  // });