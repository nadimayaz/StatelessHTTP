

#StatelessHTTP
==================================================================================================

 It is a simple Demo where i tried to show how different requests are treated independently.

 Here i have designed three different POST APIs which acts independently on calling *from anywhere*.
 Their signatures are like:
- post("/message",callback);
- post("/x/y/z/message",callback);
- post("/abc/message",callback);

*Inside the client page(demo.html).*
 <html>
 <form action="/message" method="post">
 <form action="/x/y/z/message" method="post">
 <form action="/abc/message" method="post">
 </html>
* Among these three;uncomment one  and save.


**server starts**
- node server.js

Opening the link : *localhost:8000* on the browser [Type a message and click on Send Button].

**Thank You**



