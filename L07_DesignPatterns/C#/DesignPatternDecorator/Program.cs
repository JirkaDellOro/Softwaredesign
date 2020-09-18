using System;
using System.Collections.Generic;

namespace DesignPatternDecorator
{
    interface Character
    {
        void Threaten();  
    }

    class Monster : Character
    {
        public void Threaten()
        {
            Console.Write("Grrrrr!");
        }
    } 


    class Hero : Character
    {
        public void Threaten()
        {
            Console.Write("Weiche zurück!");
        }        
    }


    // Decorator
    class CharacterSick : Character
    {
        private Character _original;

        public CharacterSick(Character original)
        {
            _original = original; 
        }
        public void Threaten()
        {
            _original.Threaten();
            Console.Write(" Hust!");
        }
    }

    class CharacterHoarse : Character
    {
        private Character _original;

        public CharacterHoarse(Character original)
        {
            _original = original; 
        }
        public void Threaten()
        {
            Console.Write("Räusper...");
            _original.Threaten();
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            List<Character> characters = new List<Character>();

            characters.Add(new Monster());
            characters.Add(new Hero());
            characters.Add(new CharacterSick(new Hero()));
            characters.Add(new CharacterSick(new CharacterSick(new Monster())));
            characters.Add(new CharacterHoarse(new Monster()));
            characters.Add(new CharacterSick(new CharacterHoarse(new Hero())));

            foreach(var character in characters)
            {
                character.Threaten();
                Console.WriteLine();
            }

        }
    }
}
