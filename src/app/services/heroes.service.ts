import {Injectable} from '@angular/core';

@Injectable()
export class HeroesService{
    private heroes: Hero[] = [
      {
        name: "Aquaman",
        bio: "The most recognized power of Aquaman is the telepathic ability to communicate with marine life, which can summon long distances.",
        img: "assets/img/aquaman.png",
        apparition: "1941-11-01",
        home:"DC"
      },
      {
        name: "Batman",
        bio: "Batman's main features are summarized in \"physical dexterity, deductive skills and obsession.\" Most of the basic characteristics of the comics have varied by the different interpretations that they have given to the character.",
        img: "assets/img/batman.png",
        apparition: "1939-05-01",
        home:"DC"
      },
      {
        name: "Daredevil",
        bio: "Having lost his sight, the four remaining senses of Daredevil were increased by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can \"see\" through a \"sixth sense\" that serves as a radar similar to that of bats.",
        img: "assets/img/daredevil.png",
        apparition: "1964-01-01",
        home: "Marvel"
      },
      {
        name: "Hulk",
        bio: "His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in command at that time (the Hulk Banner is the weakest, but it makes up for it with his intelligence).",
        img: "assets/img/hulk.png",
        apparition: "1962-05-01",
        home:"Marvel"
      },
      {
        name: "Linterna Verde",
        bio: "Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is fed by the Green Flame (reviewed by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which found a manufacturer of lamps called Chang)",
        img: "assets/img/linterna-verde.png",
        apparition: "1940-06-01",
        home: "DC"
      },
      {
        name: "Spider-Man",
        bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. The strength of Spider-Man allows you to lift 10 tons or more. Thanks to this great force, Spider-Man can perform unbelievable jumps. A \"arachnid sense \", which lets you know if a danger looms over it, before it happens. Sometimes this can lead Spider-Man to the origin of the danger.",
        img: "assets/img/spiderman.png",
        apparition: "1962-08-01",
        home: "Marvel"
      },
      {
        name: "Wolverine",
        bio: "In the fictional Marvel universe, Wolverine has regenerative powers that can heal any wound, however deadly it may be, and that same power makes it immune to any disease on Earth and some aliens. It also has a superhuman force, which although it does not compare with that of other superheroes such as the Hulk, it does surpass that of any human.",
        img: "assets/img/wolverine.png",
        apparition: "1974-11-01",
        home: "Marvel"
      }
    ];

    constructor(){
        console.log("Service ready.");
    }

    getHeroes():Hero[]{
        return this.heroes;
    }

    getHero(idx:number){
      return this.heroes[idx];
    }

    searchHeroes(term:string):Hero[]{
      term = term.toLowerCase();
      let heroes:Hero[] = [];
      for(let i = 0; i < this.heroes.length; i++){
        let hero = this.heroes[i];
        let name = hero.name.toLocaleLowerCase();
        if(name.indexOf(term) >= 0){
          hero.idx = i;
          heroes.push(hero);
        }
      }
      return heroes;
    }
}

export interface Hero {
    idx?: number;
    name: string;
    bio: string;
    img: string;
    apparition: string;
    home: string;
}