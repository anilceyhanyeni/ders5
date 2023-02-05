
const APP = {
    count : 0,
    gunSayac: [],

    saveEl: null,
    countEl: null,
    gunEl: null,
    arttirButonu: null,
    kaydetButonu: null,

    increment() {
        this.count += 1
        this.countEl.textContent = this.count
    },

    save(){
        this.gunSayac.push( this.count)

        this.saveEl.textContent += this.count + ","
    
        this.count = 0
        this.countEl.textContent = this.count
    
        localStorage.setItem("yolcuVeri", JSON.stringify(this.gunSayac))
    
        this.gunEl.textContent = `Toplam ${this.gunSayac.length} gün`
    },

    baslat() {
        this.saveEl = document.getElementById("save-el")
        this.countEl = document.getElementById("count-el")
        this.arttirButonu = document.querySelector("#increment-btn")
        this.kaydetButonu = document.querySelector("#save-btn")
        this.gunEl = document.querySelector("#gun-el")

        let lsYolcuVeri = localStorage.getItem("yolcuVeri")
        if( lsYolcuVeri !== null ) { //daha öncede LS de kayıt var demektir
            let yolcuVeri = JSON.parse(lsYolcuVeri) //elimize bir array geldi
            
            yolcuVeri.forEach( (elemanDegeri)=>{ 
                this.saveEl.textContent += elemanDegeri + "," 
                this.gunSayac.push(elemanDegeri)
            } )
        
            this.gunEl.textContent = `Toplam ${yolcuVeri.length} gün`
        }
        
        
        //event listenerlar ayarlanıyor
        this.arttirButonu.addEventListener('click', ()=>{ this.increment()  } )
        this.kaydetButonu.addEventListener('click', ()=>{ this.save() })
    }
}


APP.baslat()