---
title: numero primo
publish_date: 2022-12-19
---
---

extraido de : [mouredev/Code-Challenges: Retos de programación para mejorar nuestras habilidades (github.com)](https://github.com/mouredev/Code-Challenges)

---
Reto #3
¿ES UN NÚMERO PRIMO?

Dificultad: MEDIA

Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
Hecho esto, imprime los números primos entre 1 y 100.

Challenge #3
IS IT A PRIME NUMBER?

Difficulty: MEDIUM

Statement: Write a program that checks whether or not a number is prime.
Once this is done, print the prime numbers between 1 and 100.
package org.NUMERO_PRIMO;

        public class Numero_primo {
            static boolean numero_primo(int number){
                if (number < 2 ){
                    return false;
                }
                for (int i = 3; i < number; i++){
                    if(number % i == 0){
                        return false;
                    }
                }
                return true;
            }
            public static void main(String[] args) {
                for (int i = 0; i <=100; i++){
                    boolean num = numero_primo(i);
                    if (num){
                        System.out.printf(String.valueOf(i) +" ");
                    }
                }
            }

        }

[Link de mi github](https://github.com/VictorMagrdev)
