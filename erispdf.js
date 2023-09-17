   function Html2ErisPdf(data, winload = false) {
            var frame1 = $('<iframe />').attr("id", "printDiv");
            frame1[0].name = "frame1";
            frame1.css({ "position": "absolute", "top": "-1000000px" });
            $("body").append(frame1);
            var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
            frameDoc.document.open();
            //Create a new HTML document.
            frameDoc.document.write('<html>');
            frameDoc.document.write('<head>');
            frameDoc.document.write('<title></title>');
            //If you want to use any library/css
            frameDoc.document.write('<link rel="stylesheet" href="cdn/localurl">');
            frameDoc.document.write('</head>');
            frameDoc.document.write('<body>');
            frameDoc.document.write(data);
            frameDoc.document.write('</body>');
            frameDoc.document.write('</html>');
            frameDoc.document.close();
            setTimeout(function () {
                document.getElementById('printDiv').contentWindow.focus();
                document.getElementById('printDiv').contentWindow.print();
                // frame1.remove();
                if (winload) {
                    window.location.reload(true);
                }
            }, 500);


            return true;
        }
 
