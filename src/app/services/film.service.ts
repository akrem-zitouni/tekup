import { Injectable } from '@angular/core';
import { Film } from '../models/Film';

@Injectable({
  providedIn: 'root'
})


export class FilmService {
   films =[
    {
        "name": "La La Land",
        "annee": "25-1-2017",
        "genre": "Romance",
        "langue": "french",
        "image": "LaLaLand.jpg",
        "category": "film",
        "id": 1,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. "
    },
    {
        "name": "Blade Runner 2049",
        "annnee": "4/8/2017",
        "genre": "Science-Fiction",
        "image": "BladeRunner2049.jpg",
        "id": 2,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "L'Île aux chiens",
        "image": "chiens.jpg",
        "id": 3,
        "genre": "Animation",
        "annee": "11/4/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "Citizen Kane",
        "image": "CitizenKane.jpg",
        "id": 4,
        "genre": "Drame",
        "annee": "2/10/1946",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
     {
       "name": "The Fountain",
       "image": "TheFountain.jpg",
       "id": 5,
       "genre": "Drame",
       "annee": "6/20/2006",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "french"
     },
     {
       "name": "Le Fabuleux Destin d'Amélie Poulain",
       "image": "Fabuleux.jpg",
       "id": 6,
       "genre": "Comédie",
       "annee": "25/04/2001",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "english"
     },
     {
       "name": "Mad Max",
       "image": "Mad.jpg",
       "id": 7,
       "genre": "Action",
       "annee": "1/3/2020",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "english"
     },
     {
       "name": "13 reasons why",
       "image": "reasons.PNG",
       "id": 8,
       "genre": "horor",
       "annee": "8/14/2018",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "french"
     },
     {
       "name": "Le Troisième homme",
       "image": "LeTroisièmehomme.jpg",
       "id": 9,
       "genre": "dramatic",
       "annee": "3/8/1949",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "english"
     },
    {
        "name": "Kagemusha",
        "image": "Kagemusha.jpg",
        "id": 10,
        "genre": "musical",
        "annee": "1/30/2021",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "Upside Down",
        "image": "UpsideDown.jpg",
        "id": 12,
        "genre": "science fiction",
        "annee": "3/3/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },


    {
        "name": "Inception",
        "image": "Inception.jpg",
        "id": 9,
        "genre": "science fiction",
        "annee": "3/28/2010",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "American Beauty ",
        "image": "American.jpg",
        "id": 10,
        "genre": "action",
        "annee": "11/16/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
     {
       "name": "hawaii five-o",
       "image": "hawaii.PNG",
       "id": 11,
       "genre": "dramatic",
       "annee": "3/27/2020",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "french"
     },
    {
        "name": "Birdman",
        "image": "Birdman.jpg",
        "id": 12,
        "genre": "comedy",
        "annee": "6/6/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },

    {
        "name": "luke cage",
        "image": "luke.PNG",
        "id": 13,
        "genre": "musical",
        "annee": "12/26/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
     {
       "name": "Gravity",
       "image": "Gravity.jpg",
       "id": 14,
       "genre": "dramatic",
       "annee": "5/18/2021",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "english"
     },

    {
        "name": "the kissing booth",
        "image": "kissing.PNG",
        "id": 15,
        "genre": "horor",
        "annee": "9/4/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
     {
       "name": "marlon",
       "image": "marlon.PNG",
       "id": 16,
       "genre": "dramatic",
       "annee": "11/20/2019",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "french"
     },
     {
       "name": "bright",
       "image": "bright.PNG",
       "id": 17,
       "genre": "science fiction",
       "annee": "12/7/2019",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "english"
     },
     {
       "name": "bad boys",
       "image": "bad.PNG",
       "id": 18,
       "genre": "comedy",
       "annee": "4/24/2020",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "english"
     },
   {
        "name": "Hugo Cabret",
        "image": "Hugo.jpg",
        "id": 19,
        "genre": "drame",
        "annee": "2/19/2011",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "new girl",
        "image": "girl.PNG",
        "id": 20,
        "genre": "action",
        "annee": "12/28/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "legends of tomorrow",
        "image": "legends.PNG",
        "id": 21,
        "genre": "comedy",
        "annee": "8/8/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "agents of shield",
        "image": "agents.PNG",
        "id": 22,
        "genre": "dramatic",
        "annee": "11/30/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
     {
       "name": "national trasure",
       "image": "national.PNG",
       "id": 23,
       "genre": "comedy",
       "annee": "10/28/2020",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
       "langue": "english"
     },

    {
        "name": "cooking on high",
        "image": "cooking.PNG",
        "id": 24,
        "genre": "comedy",
        "annee": "7/3/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "queer eye",
        "image": "queer.PNG",
        "id": 25,
        "genre": "musical",
        "annee": "8/8/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "shooter",
        "image": "shooter.PNG",
        "id": 26,
        "genre": "action",
        "annee": "2/12/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "jessica jones",
        "image": "jessica.PNG",
        "id": 27,
        "genre": "horor",
        "annee": "5/15/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "wanted",
        "image": "wanted.PNG",
        "id": 28,
        "genre": "horor",
        "annee": "3/31/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },

    {
        "name": "The Revenant",
        "image": "TheRevenant.jpg",
        "id": 29,
        "genre": "Western",
        "annee": "24/02/2016",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },




]

  constructor() {

    console.log(this.films)




  }


  addToFavorite(product:any){
    let savedProduct = localStorage.getItem('favorite');

    if(savedProduct){
      console.log("not empty")
      let listFavorite:Array<any> = JSON.parse(atob(savedProduct))
      console.log( )
        if(listFavorite.find((s)=> s.name === product.name) === undefined){
          console.log("add")
          listFavorite.push(product)
          localStorage.setItem('favorite',btoa(JSON.stringify(listFavorite)))
        }
    }
    else{
      console.log(" empty")

      let listFavorite = new Array<any>();
      listFavorite.push(product)
      localStorage.setItem('favorite',btoa(JSON.stringify(listFavorite)))
    }
  }


  deleteFromFavorite(product:any){
    let savedProduct = localStorage.getItem('favorite');
    let listFavorite:Array<any> = JSON.parse(atob(savedProduct))
    localStorage.setItem('favorite',btoa(JSON.stringify(listFavorite.filter((s)=>s.name !== product.name)
    )))
  }


  loadfavorite(){
    let savedProduct = localStorage.getItem('favorite');
    if(!savedProduct)
      return null;
    let listFavorite:Array<any> = JSON.parse(atob(savedProduct))
     return listFavorite
  }


  addFilm(film){
    this.films.push(film);
  }

 getFilms(){
   return this.films;
 }

 getCountFilm(){
   return this.films.length;
 }


  loadUser(){
    let user = localStorage.getItem('authToken');

    if(user){
        return JSON.parse(atob(user))
    }
    else{
        return null
    }
  }


  getLanguage(){

    return Array.from(new Set(this.films.map((s)=>s.langue)));
  }

  getAnnee(){
    return Array.from(new Set(this.films.map((s)=>String(new Date(s.annee).getFullYear()))))
  }


  getGenre(){
    console.log(Array.from(new Set(this.films.map(s=>s.genre))))
    return Array.from(new Set(this.films.map(s=>s.genre)))
  }


  deleteFilm(product){
    console.log(this.films.filter(s => s.id !== product.id))
    this.films = this.films.filter(s => s.id !== product.id)
  }

  getFilm(id){
    console.log(id)
    return this.films.find(s => String(s.id) === String(id))
  }


  updateFilm(f){
    this.deleteFilm(f);
    this.addFilm(f);
  }

}
