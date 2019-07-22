/*-----------@
jsPager v1.00
Developed by Jagadeesan S [Runner625]
Email jagadeesanjd11@gmail.com
@-----------*/
class jsPager{
    constructor(title,style=[],script=[]){
        this.title=title;
        this.style=style;
        this.script=script;
        this.bodyElement='';
        this.innerJs='';
        this.innerStyle='';
    }
    setBody(elm){
        this.bodyElement+=elm;
    }
    setJS(code){
        this.innerJs+=code;
    }
    setStyle(sty){
        this.innerStyle+=sty;
    }
    docChange() {
        document.querySelector('title').innerText=this.title;
        let head=document.querySelector('head');
        for(let i=0; i<this.style.length; i++){
            let link=document.createElement('link');
            link.href=this.style[i];
            link.rel='stylesheet';
            head.appendChild(link);
        }
        for(let i=0; i<this.script.length; i++){
            let script=document.createElement('script');
            script.src=this.script[i];
            head.appendChild(script);
        }
        let body=document.querySelector('body');
        body.innerHTML=this.bodyElement;
        let innerStyle=document.createElement('style');
        innerStyle.appendChild(document.createTextNode(this.innerStyle));
        body.appendChild(innerStyle);
        let innerJs=document.createElement('script');
        innerJs.appendChild(document.createTextNode(this.innerJs));
        body.appendChild(innerJs);
    }
}
