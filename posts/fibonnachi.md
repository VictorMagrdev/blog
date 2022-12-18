---
title: fizz buzz
publish_date: 2022-12-18
---
---

extraido de : [mouredev/Code-Challenges: Retos de programación para mejorar nuestras habilidades (github.com)](https://github.com/mouredev/Code-Challenges)

---

Reto #2
LA SUCESIÓN DE FIBONACCI
Dificultad: DIFÍCIL

Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
0, 1, 1, 2, 3, 5, 8, 13...

Challenge #2
THE FIBONACCI SEQUENCE
Difficulty: HARD

Statement: Write a program that prints the first 50 numbers of the Fibonacci sequence starting at 0.
The Fibonacci series is made up of a sequence of numbers in which the next one is always the sum of the previous two.
0, 1, 1, 2, 3, 5, 8, 13...

            package org.FIBONNACI;

            public class Fibonnaci {
                public static void main(String[] args) {
                    int user = 6;
                    int j = 0;
                    int k = 1;
                    int suma = 0;
                    for (int i = 0; i <= user; i++){
                        System.out.println(suma);
                        suma = k+j;
                        j = k;
                        k = suma;

                    }
                    System.out.println();
                }
            }

[Link de mi github](https://github.com/VictorMagrdev)
