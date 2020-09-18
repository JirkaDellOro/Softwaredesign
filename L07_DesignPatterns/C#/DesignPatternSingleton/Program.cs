using System;
using System.Collections.Generic;

namespace DesignPatternSingleton
{

    public class Person
    {
        public string Name;
        public int Age;
        public int Id;

        public override string ToString()
        {
            return "Name:" + Name + ", Age: " + Age + ", " + "Id: " + Id;
        }
    }

    /*
    class GlobalVariables
    {
        // public static int letzteID = 1;
        public static IDGenerator idGenerator = new IDGenerator();
    }
    */

    public class IDGenerator
    {
        private int lastID;
        private IDGenerator()
        {
            lastID = 1;
        }

        private static IDGenerator _instance;

        public static IDGenerator GetInstance()
        {
            if (_instance == null)
                _instance = new IDGenerator();
            return _instance;
        }

        public int generateID()
        {
            return lastID++;
        }
    } 

    class Program
    {

        static void Main(string[] args)
        {
            

            List<Person> persons = new List<Person>();

            // Eine Stelle, an der Personen angelegt werden
            persons.Add(new Person{ Name="Dieter", Age=44,     Id = IDGenerator.GetInstance().generateID()});
            persons.Add(new Person{ Name="Horst", Age=45,      Id = IDGenerator.GetInstance().generateID()});
            persons.Add(new Person{ Name="Walter", Age=33,     Id = IDGenerator.GetInstance().generateID()});
            persons.Add(new Person{ Name="Karl-Heinz", Age=22, Id = IDGenerator.GetInstance().generateID()});


            // Eine ANDERE Stelle, an der Personen angelegt werden
            persons.Add(new Person{ Name="Brunhilde", Age=56,    Id = IDGenerator.GetInstance().generateID()});
            persons.Add(new Person{ Name="Maria", Age=75,        Id = IDGenerator.GetInstance().generateID()});
            persons.Add(new Person{ Name="Kunigunde", Age=22,    Id = IDGenerator.GetInstance().generateID()});
            persons.Add(new Person{ Name="Tusnelda", Age=12,     Id = IDGenerator.GetInstance().generateID()});





            foreach (var person in persons)
                Console.WriteLine(person);

            Console.WriteLine("Hello World!");
        }
    }
}
