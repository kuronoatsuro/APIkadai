$("#btn").on("click", function () {

    const targetArtistName=$('#keyword').val()
    
        const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&limit=50&term=${targetArtistName}`;
    
        $.getJSON(requestUrl, function (data) {
            //送り返されたデータを使ってこの部分で色々やる
            console.log(data);
            console.log(data["results"][0]["previewUrl"])
    
            $('#audio').attr("src",data["results"][0]["previewUrl"]);
            //属性を示す
            // $("#audio")[0].play();
            //jQueryを使うx Videoタグの場合に「0」が必要
    
            data.results.forEach(function(song,index){
                const trackName = song.trackName;//曲名
                const artistName = song.artistName;//アーティスト名
                const artworkUrl = song.artworkUrl100;//画像
                const music = `<div class="music"> <img src="${artworkUrl}" alt="${trackName}"> <div> 
                <p class="track-name">${trackName}</p> 
                <p class="artist-name">${artistName}</p> 
                </div> </div>`; 
                $("#result").append(music);
            });
        });
    });
    
      //画面に１曲分の情報表示