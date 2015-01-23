// 
// (function(){
//   'use strict';
//
//   var chimps = rawChimpData.chimps;
//
//   $(document).ready(function(){
//
//     var $list = $('.chimps-list');
//
//     chimps.forEach(function(chimp){
//       var chimpText = renderTemplate('chimp-item', {
//         name: chimp.name,
//         // brewery: beer.brewery.name
//       });
//       $list.append(chimpText);
//     });
//
//   });
//
//   function renderTemplate(name, data) {
//     var $template = $('[data-template-name=' + name + ']').text();
//     $.each(data, function(prop, value) {
//       $template = $template.replace('<% ' + prop + ' %>', value);
//     });
//     return $template;
//   }
//
// })();




















// $('.todo button').on('click', function(event){
//     // add the class .complete to just that todo
//     $(this).toggleClass('complete');
//   });
