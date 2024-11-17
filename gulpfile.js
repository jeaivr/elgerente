const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      █▀█▄▄▄▄     ██▄
      █▀▄▄▄▄█     █▀▀█
   ▄▄▄█     █  ▄▄▄█
  ██▀▄█ ▄██▀█ ███▀█
   ▀▀▀  ▀█▄█▀ ▀█▄█▀


|  jeaivr forever and forever.
|  a 100 years, jeaivr's things.
|  me and jeaivr running around,
|  and jeaivr time all day long
|  forever all... a 100 days
|  jeaivr forever a 100 times
|  over and over, jeaivradventures.com
|  www.jeaivr.com, www.jeaivradventures
|  all a 100 years, every minute
|  jeaivr.com, www.100timesjeaivr.com

==============================================
*           Copyright 2024 @jeaivr           *
==============================================                                                                                                          
                                                                                                                 
                    jjjj                                       iiii                                              
    @@@@@@@@@      j::::j                                     i::::i                                             
  @@:::::::::@@     jjjj                                       iiii                                              
@@:::::::::::::@@                                                                                                
@:::::::@@@:::::::@jjjjjjj    eeeeeeeeeeee    aaaaaaaaaaaaa   iiiiiiivvvvvvv           vvvvvvvrrrrr   rrrrrrrrr   
@::::::@   @::::::@j:::::j  ee::::::::::::ee  a::::::::::::a  i:::::i v:::::v         v:::::v r::::rrr:::::::::r  
@:::::@  @@@@:::::@ j::::j e::::::eeeee:::::eeaaaaaaaaa:::::a  i::::i  v:::::v       v:::::v  r:::::::::::::::::r 
@:::::@  @::::::::@ j::::je::::::e     e:::::e         a::::a  i::::i   v:::::v     v:::::v   rr::::::rrrrr::::::r
@:::::@  @::::::::@ j::::je:::::::eeeee::::::e  aaaaaaa:::::a  i::::i    v:::::v   v:::::v     r:::::r     r:::::r
@:::::@  @:::::::@@ j::::je:::::::::::::::::e aa::::::::::::a  i::::i     v:::::v v:::::v      r:::::r     rrrrrrr
@:::::@  @@@@@@@@   j::::je::::::eeeeeeeeeee a::::aaaa::::::a  i::::i      v:::::v:::::v       r:::::r            
@::::::@            j::::je:::::::e         a::::a    a:::::a  i::::i       v:::::::::v        r:::::r            
@:::::::@@@@@@@@    j::::je::::::::e        a::::a    a:::::a i::::::i       v:::::::v         r:::::r            
@@:::::::::::::@   j::::j e::::::::eeeeeeeea:::::aaaa::::::a i::::::i        v:::::v          r:::::r            
  @@:::::::::::@   j::::j  ee:::::::::::::e a::::::::::aa:::ai::::::i         v:::v           r:::::r            
    @@@@@@@@@@@    j::::j    eeeeeeeeeeeeee  aaaaaaaaaa  aaaaiiiiiiii          vvv            rrrrrrr            
                   j::::j                                                                                        
         jjjj      j::::j                                                                                        
        j::::jj   j:::::j                                                                                        
        j::::::jjj::::::j                                                                                        
         jj::::::::::::j                                                                                         
           jjj::::::jjj                                                                                          
              jjjjjj                                                                                             

================================================
*               que miras osFrog               *
================================================
  
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

      █▀█▄▄▄▄     ██▄
      █▀▄▄▄▄█     █▀▀█
   ▄▄▄█     █  ▄▄▄█
  ██▀▄█ ▄██▀█ ███▀█
   ▀▀▀  ▀█▄█▀ ▀█▄█▀


|  jeaivr forever and forever.
|  a 100 years, jeaivr's things.
|  me and jeaivr running around,
|  and jeaivr time all day long
|  forever all... a 100 days
|  jeaivr forever a 100 times
|  over and over, jeaivradventures.com
|  www.jeaivr.com, www.jeaivradventures
|  all a 100 years, every minute
|  jeaivr.com, www.100timesjeaivr.com

==============================================
*           Copyright 2024 @jeaivr           *
==============================================                                                                                                          
                                                                                                                 
                    jjjj                                       iiii                                              
    @@@@@@@@@      j::::j                                     i::::i                                             
  @@:::::::::@@     jjjj                                       iiii                                              
@@:::::::::::::@@                                                                                                
@:::::::@@@:::::::@jjjjjjj    eeeeeeeeeeee    aaaaaaaaaaaaa   iiiiiiivvvvvvv           vvvvvvvrrrrr   rrrrrrrrr   
@::::::@   @::::::@j:::::j  ee::::::::::::ee  a::::::::::::a  i:::::i v:::::v         v:::::v r::::rrr:::::::::r  
@:::::@  @@@@:::::@ j::::j e::::::eeeee:::::eeaaaaaaaaa:::::a  i::::i  v:::::v       v:::::v  r:::::::::::::::::r 
@:::::@  @::::::::@ j::::je::::::e     e:::::e         a::::a  i::::i   v:::::v     v:::::v   rr::::::rrrrr::::::r
@:::::@  @::::::::@ j::::je:::::::eeeee::::::e  aaaaaaa:::::a  i::::i    v:::::v   v:::::v     r:::::r     r:::::r
@:::::@  @:::::::@@ j::::je:::::::::::::::::e aa::::::::::::a  i::::i     v:::::v v:::::v      r:::::r     rrrrrrr
@:::::@  @@@@@@@@   j::::je::::::eeeeeeeeeee a::::aaaa::::::a  i::::i      v:::::v:::::v       r:::::r            
@::::::@            j::::je:::::::e         a::::a    a:::::a  i::::i       v:::::::::v        r:::::r            
@:::::::@@@@@@@@    j::::je::::::::e        a::::a    a:::::a i::::::i       v:::::::v         r:::::r            
@@:::::::::::::@   j::::j e::::::::eeeeeeeea:::::aaaa::::::a i::::::i        v:::::v          r:::::r            
  @@:::::::::::@   j::::j  ee:::::::::::::e a::::::::::aa:::ai::::::i         v:::v           r:::::r            
    @@@@@@@@@@@    j::::j    eeeeeeeeeeeeee  aaaaaaaaaa  aaaaiiiiiiii          vvv            rrrrrrr            
                   j::::j                                                                                        
         jjjj      j::::j                                                                                        
        j::::jj   j:::::j                                                                                        
        j::::::jjj::::::j                                                                                        
         jj::::::::::::j                                                                                         
           jjj::::::jjj                                                                                          
              jjjjjj                                                                                             

================================================
*               que miras osFrog               *
================================================
  
-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      █▀█▄▄▄▄     ██▄
      █▀▄▄▄▄█     █▀▀█
   ▄▄▄█     █  ▄▄▄█
  ██▀▄█ ▄██▀█ ███▀█
   ▀▀▀  ▀█▄█▀ ▀█▄█▀


|  jeaivr forever and forever.
|  a 100 years, jeaivr's things.
|  me and jeaivr running around,
|  and jeaivr time all day long
|  forever all... a 100 days
|  jeaivr forever a 100 times
|  over and over, jeaivradventures.com
|  www.jeaivr.com, www.jeaivradventures
|  all a 100 years, every minute
|  jeaivr.com, www.100timesjeaivr.com

==============================================
*           Copyright 2024 @jeaivr           *
==============================================                                                                                                          
                                                                                                                 
                    jjjj                                       iiii                                              
    @@@@@@@@@      j::::j                                     i::::i                                             
  @@:::::::::@@     jjjj                                       iiii                                              
@@:::::::::::::@@                                                                                                
@:::::::@@@:::::::@jjjjjjj    eeeeeeeeeeee    aaaaaaaaaaaaa   iiiiiiivvvvvvv           vvvvvvvrrrrr   rrrrrrrrr   
@::::::@   @::::::@j:::::j  ee::::::::::::ee  a::::::::::::a  i:::::i v:::::v         v:::::v r::::rrr:::::::::r  
@:::::@  @@@@:::::@ j::::j e::::::eeeee:::::eeaaaaaaaaa:::::a  i::::i  v:::::v       v:::::v  r:::::::::::::::::r 
@:::::@  @::::::::@ j::::je::::::e     e:::::e         a::::a  i::::i   v:::::v     v:::::v   rr::::::rrrrr::::::r
@:::::@  @::::::::@ j::::je:::::::eeeee::::::e  aaaaaaa:::::a  i::::i    v:::::v   v:::::v     r:::::r     r:::::r
@:::::@  @:::::::@@ j::::je:::::::::::::::::e aa::::::::::::a  i::::i     v:::::v v:::::v      r:::::r     rrrrrrr
@:::::@  @@@@@@@@   j::::je::::::eeeeeeeeeee a::::aaaa::::::a  i::::i      v:::::v:::::v       r:::::r            
@::::::@            j::::je:::::::e         a::::a    a:::::a  i::::i       v:::::::::v        r:::::r            
@:::::::@@@@@@@@    j::::je::::::::e        a::::a    a:::::a i::::::i       v:::::::v         r:::::r            
@@:::::::::::::@   j::::j e::::::::eeeeeeeea:::::aaaa::::::a i::::::i        v:::::v          r:::::r            
  @@:::::::::::@   j::::j  ee:::::::::::::e a::::::::::aa:::ai::::::i         v:::v           r:::::r            
    @@@@@@@@@@@    j::::j    eeeeeeeeeeeeee  aaaaaaaaaa  aaaaiiiiiiii          vvv            rrrrrrr            
                   j::::j                                                                                        
         jjjj      j::::j                                                                                        
        j::::jj   j:::::j                                                                                        
        j::::::jjj::::::j                                                                                        
         jj::::::::::::j                                                                                         
           jjj::::::jjj                                                                                          
              jjjjjj                                                                                             

================================================
*               que miras osFrog               *
================================================

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});