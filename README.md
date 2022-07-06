<h1 align="center">Youtube Kanal Videoları Fonksiyonu</h1>
<h3>Bu ne işinize yarar?</h3>

Normalde <a href="https://www.youtube.com/">Youtube</a>'da Sıralama Ölçütü var.<br><br>
<img src="https://i.vgy.me/rYTQIK.png" alt="Sıralama Ölçütü"><br>
Ordan En Popüler'i seçince en çok izlenen vidyoyu getiriyor<br><br>
<img src="https://i.vgy.me/bLYt6R.png" alt="Sıralama Seçenekleri"><br>
ama bunu bir müzik kanalında yapmak istediğinizde böyle bir şeyin olmadığını görüyorsunuz.<br><br><br>
İşte bu yüzden bu script'i yazdım.

<h3>Nasıl kullanılır?</h3>

<img src="https://i.vgy.me/xbe3Et.png" alt="Müzik">

Yukardaki gibi bir müzik kanalının<br><br>
<img src="https://i.vgy.me/g9kuEa.png" alt="Videolar"><br>
videolar kısmına gelip `ctrl + shift + I` veya `F12` ile konsolu açın ve <a href="https://github.com/TavukDoner7528/youtube-get-videos/blob/index/paste-to-console.js">kodu</a> yapıştırın.<br><br>
<h3>Fonksiyonlar</h3> 

**En fazla izlenen video:** ```_this.mostViewed()```<br>
**En az izlenen video:** ```_this.leastViewed()```<br>
**Fazladan aza doğru videolar:** ```_this.mostToLeast()```<br>
**Azdan fazlaya doğru videolar:** ```_this.leastToMost()```<br>

<h3>Örnek Kullanım</h3>

```new Youtube("kanalın-adı").getVideos().then(_this => console.log(_this.mostViewed())).catch(console.error)```

> **Önemli!** Tüm videoların yüklenmesi için sayfayı en aşağıya kaydırın. Yoksa tüm videoları çekemezsiniz!
