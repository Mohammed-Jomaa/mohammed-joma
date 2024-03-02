const reels_section = document.querySelector('.reels_section');

reels_btn.onclick = () => { setValue("reels_section"); }


function setValue(value1){
    let val1 = value1;
    
    reels_section.classList.remove("active");
    reels_btn.className = "bi bi-camera-video";

    if(val1 == "reels_section"){
        reels_section.classList.add("active");
        reels_btn.className = "bi bi-camera-video-fill";
    } 
}


// reels video section
const video = document.querySelectorAll('.container video');

for(let i = 0; i < video.length; i++){
    video[i].addEventListener("mouseenter", () => {
        video[i].play();
        video[i].loop = true;

        video[i].onclick = () => {
            if(video[i].paused){
                video[i].play();
            }else{
                video[i].pause();
            }
            like_counter.classList.remove("active");
            comment_counter.classList.remove("active");
            send_video.classList.remove("active");
            share_video.classList.remove("active");
        }

        // reels video like button setting 
        const parentDiv = video[i].parentElement;
        const like_btn = parentDiv.querySelector('.options .bi-heart');
        const like_btn_span = parentDiv.querySelectorAll('.options span');

        video[i].ondblclick = () => {
            if(!(like_btn.classList.contains("bi-heart-fill"))){
                setColor();
            }
        }

        const like_counter = parentDiv.querySelector('.like_counter');
        like_btn.onclick = () => {
            if(like_btn.classList.contains("bi-heart-fill")){
                removeColor();
            } else{
                setColor();
            }
        }

        for(let i = 0; i < like_btn_span.length; i++){
            if(i == 0){
                like_btn_span[0].onclick = () => {
                    like_counter.classList.toggle("active");
                }
            } else {
                like_btn_span[1].onclick = () => {
                    comment_counter.classList.toggle("active");
                }
            }
        }

        const like_close_btn = document.querySelectorAll('.bi-x-lg');
        for(let counter_close of like_close_btn){
            counter_close.onclick = close_counter;
        }

        // like reels video
        function setColor(){
            like_btn.className = "bi bi-heart-fill";
            like_btn.style.color = "red";
        }

        // unlike reels video
        function removeColor(){
            like_btn.style.color = "#fff";
                like_btn.classList.remove("bi-heart-fill");
                like_btn.classList.add("bi-heart");
        }
    });
    video[i].addEventListener("mouseleave", () => {
        video[i].pause();
    });
}

