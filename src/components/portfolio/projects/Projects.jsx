import React from 'react';

export default function Projects() {
    const proj=[
        {
            name:'FTP Client and Server',
            year:'2021',
            technologies:'C++, netdb.h , arpa/inet.h, sys socket.h',
            description:'A console application similar to FileZilla ftp client which uses c++ libraries to connect to a server from a client. Another application which facilitates a device to host itself as a ftp file server with the same stack of technologies.',
            code: 'Upon request'
        },
        {
            name:'Sleeping Teaching Assistant',
            year:'2021',
            technologies:'C , POSIX, MUTEX, SEMAPHORE',
            description:'A console application which initiates a queue of students who wait for a teaching assistant to help them with a problem and when teaching assistance is not helping, they sleep. This is implemented in c with mutual exclusion, semaphores and multithreading capabilities of pthread library',
            code: 'Upon request'
        },
        {
            name:'A* Search Algorithm',
            year:'2021',
            technologies:'Python, AI and advanced algorithms, A* algorithm',
            description:'Developed a search based AI agent to sort balls with same color to a specific jar without breaking the rules of the game. This program relies on hueristics (guesses) to traverse through all the possibilities',
            code: 'Github'
        },
        {
            name:'Sudoku Checker',
            year:'2021',
            technologies:'C , POSIX',
            description:'checks a solution of a sudoku puzzle with 27 threads running concurrently with pthread libraries which effectively provides a true or false as a return value',
            code: 'Upon request'
        },
        {
            name:'Chirpy',
            year:'2021',
            technologies:'Python, Django, ReactJS, git, Django REST framework, JavaScript',
            description:'Developed a full stack application to allow users to post Tweets over an online forum called chirpy. Backend developed in python framework Django and created an api with Django rest framework. Frontend makes asynchronous requests to the api which is implemented in ReactJs',
            code: 'Github'
        },
        {
            name:'Viu-It',
            year:'2021',
            technologies:'Python, MySQL',
            description:'Developed a server from scratch which serves html pages to host a blog post website allowing users to share media which is stored in Mysql database',
            code: 'Github'
        },
        {
            name:'Console Messenger',
            year:'2020',
            technologies:'C++, ncurses, SQLPlus',
            description:'A console messenger application to send messages through commandline over a local area network with ncurses library for front end and connected to a SQLPlus Database',
            code: 'Github'
        },
        {
            name:'Grading Software',
            year:'2019',
            technologies:'C++, git',
            description:'Developed an custom grading software for the teachers at university to generate reports for students with the use of Software Engineering techniques',
            code: 'Github'
        }
    ];
  return <div></div>;
}
