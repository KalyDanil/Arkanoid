const body = document.querySelector("body");
const field = document.querySelector(".field");
const platform = document.querySelector(".platform");
let score = document.querySelector(".score");
let lifes = document.querySelector(".lifes");
const platformCoords = platform.getBoundingClientRect();
const platformCoordY = platformCoords.y - 12;
const fieldCoords = field.getBoundingClientRect();
const fieldCoordX = fieldCoords.x;
const fieldCoordY = fieldCoords.y;

field.addEventListener("mousemove", platformBallMoving);
field.addEventListener("mouseout", platformBallMovingToEnd);

let ballY = 575;
let ballX = 0;
let bullet1Y = 0;
let bullet2Y = 0;
let bullet3Y = 0;
let bullet4Y = 0;
let scoreNumber = 0;
score.innerHTML = scoreNumber;
let lifesNumber = 3;
lifes.innerHTML = lifesNumber;
let lvlNumber = 0;
let hardAfter = -1

if (prompt("Hard mode on/off?", "") === "on") {
    hardAfter = Number(prompt("Hard mode will begin after this level",""));
}

class Rectangles {
    
    constructor (color) {
        this.color = color;
    }

    addRectangle(top, left) {
        const rectangle = document.createElement("div");
        rectangle.classList.add("rectangles");
        rectangle.classList.add(`${this.color}Rectangle`);
        field.append(rectangle);
        rectangle.style.top = top + "px";
        rectangle.style.left = left + "px";
    }
}

const red = new Rectangles("red");
const green =  new Rectangles("green");
const blue =  new Rectangles("blue");
const orange =  new Rectangles("orange");

function lvl1() {
    const ball = document.querySelector(".ball");
    field.addEventListener("mousemove", platformBallMoving);
    field.addEventListener("mouseout", platformBallMovingToEnd);
    body.addEventListener("click", bulletsAttackStart);
    body.addEventListener("click", startMove);

    bulletDeleting();

    orange.addRectangle(270, 300);
    orange.addRectangle(270, 350);
    orange.addRectangle(300, 300);
    orange.addRectangle(300, 350);
    green.addRectangle(270, 250);
    green.addRectangle(300, 250);
    green.addRectangle(270, 400);
    green.addRectangle(300, 400);
    blue.addRectangle(330, 250);
    blue.addRectangle(330, 300);
    blue.addRectangle(330, 350);
    blue.addRectangle(330, 400);
    red.addRectangle(360, 325);

    ballY = 575;
    ballX = 335;
    ball.style.top = 575 + "px";
    ball.style.left = 335 + "px";
    platform.style.top = 590 + "px";
    platform.style.left = 265 + "px";
    lvlNumber = 1;
}

lvl1();

function lvl2() {
    const ball = document.querySelector(".ball");
    field.addEventListener("mousemove", platformBallMoving);
    field.addEventListener("mouseout", platformBallMovingToEnd);
    body.addEventListener("click", bulletsAttackStart);
    body.addEventListener("click", startMove);
    
    bulletDeleting();

    red.addRectangle(250, 50);
    red.addRectangle(320, 50);
    green.addRectangle(250, 130);
    green.addRectangle(320, 130);
    blue.addRectangle(250, 210);
    blue.addRectangle(320, 210);
    blue.addRectangle(250, 290);
    blue.addRectangle(320, 290);
    blue.addRectangle(250, 370);
    blue.addRectangle(320, 370);
    blue.addRectangle(250, 450);
    blue.addRectangle(320, 450);
    green.addRectangle(250, 530);
    green.addRectangle(320, 530);
    red.addRectangle(250, 610);
    red.addRectangle(320, 610);

    ballY = 575;
    ballX = 335;
    ball.style.top = 575 + "px";
    ball.style.left = 335 + "px";
    platform.style.top = 590 + "px";
    platform.style.left = 265 + "px";
    lvlNumber = 2;
}

function lvl3() {
    const ball = document.querySelector(".ball");
    field.addEventListener("mousemove", platformBallMoving);
    field.addEventListener("mouseout", platformBallMovingToEnd);
    body.addEventListener("click", bulletsAttackStart);
    body.addEventListener("click", startMove);

    bulletDeleting();

    orange.addRectangle(400, 30);
    green.addRectangle(350, 80);
    orange.addRectangle(300, 120);
    green.addRectangle(250, 170);
    orange.addRectangle(200, 220);
    green.addRectangle(150, 270);
    orange.addRectangle(100, 320);
    green.addRectangle(50, 370);
    green.addRectangle(150, 395);
    orange.addRectangle(200, 345);
    green.addRectangle(250, 295);
    orange.addRectangle(300, 245);
    green.addRectangle(350, 195);
    orange.addRectangle(400, 145);
    green.addRectangle(450, 95);

    ballY = 575;
    ballX = 335;
    ball.style.top = 575 + "px";
    ball.style.left = 335 + "px";
    platform.style.top = 590 + "px";
    platform.style.left = 265 + "px";
    lvlNumber = 3;
}

function lvl4() {
    const ball = document.querySelector(".ball");
    field.addEventListener("mousemove", platformBallMoving);
    field.addEventListener("mouseout", platformBallMovingToEnd);
    body.addEventListener("click", bulletsAttackStart);
    body.addEventListener("click", startMove);

    bulletDeleting();

    red.addRectangle(275, 325);
    red.addRectangle(305, 300);
    red.addRectangle(305, 350);
    green.addRectangle(275, 0);
    green.addRectangle(310, 25);
    green.addRectangle(345, 50);
    green.addRectangle(380, 75);
    green.addRectangle(275, 650);
    green.addRectangle(310, 625);
    green.addRectangle(345, 600);
    green.addRectangle(380, 575);
    green.addRectangle(405, 500);
    green.addRectangle(405, 450);
    green.addRectangle(405, 400);
    green.addRectangle(405, 350);
    green.addRectangle(405, 300);
    green.addRectangle(405, 250);
    green.addRectangle(405, 200);
    green.addRectangle(405, 150);

    ballY = 575;
    ballX = 335;
    ball.style.top = 575 + "px";
    ball.style.left = 335 + "px";
    platform.style.top = 590 + "px";
    platform.style.left = 265 + "px";
    lvlNumber = 4;
}

function lvl5() {
    const ball = document.querySelector(".ball");
    field.addEventListener("mousemove", platformBallMoving);
    field.addEventListener("mouseout", platformBallMovingToEnd);
    body.addEventListener("click", bulletsAttackStart);
    body.addEventListener("click", startMove);

    bulletDeleting();

    red.addRectangle(100, 100);
    red.addRectangle(130, 100);
    red.addRectangle(160, 100);
    red.addRectangle(190, 100);
    red.addRectangle(220, 100);
    red.addRectangle(250, 100);
    red.addRectangle(280, 100);
    red.addRectangle(310, 100);
    red.addRectangle(340, 100);
    red.addRectangle(100, 150);
    red.addRectangle(100, 200);
    red.addRectangle(100, 250);
    red.addRectangle(100, 300);
    red.addRectangle(100, 350);
    red.addRectangle(100, 400);
    red.addRectangle(100, 450);
    red.addRectangle(100, 500);
    red.addRectangle(100, 550);
    red.addRectangle(130, 550);
    red.addRectangle(160, 550);
    red.addRectangle(190, 550);
    red.addRectangle(220, 550);
    red.addRectangle(250, 550);
    red.addRectangle(280, 550);
    red.addRectangle(310, 550);
    red.addRectangle(340, 550);
    red.addRectangle(340, 500);
    red.addRectangle(340, 450);
    red.addRectangle(340, 400);
    red.addRectangle(340, 350);
    red.addRectangle(340, 300);
    red.addRectangle(340, 250);
    red.addRectangle(340, 200);
    red.addRectangle(340, 150);

    ballY = 575;
    ballX = 335;
    ball.style.top = 575 + "px";
    ball.style.left = 335 + "px";
    platform.style.top = 590 + "px";
    platform.style.left = 265 + "px";
    lvlNumber = 5;
}

function restart() {
    const rectangles = document.querySelectorAll(".rectangles");
    for (let rec of rectangles) {
        rec.remove();
    }
}

function scoreCounting(rec) {
    if (rec.classList.contains("orangeRectangle")) {
        scoreNumber += 30;
        score.innerHTML = scoreNumber;
    }

    if (rec.classList.contains("greenRectangle")) {
        scoreNumber += 20;
        score.innerHTML = scoreNumber;
    }

    if (rec.classList.contains("blueRectangle")) {
        scoreNumber += 10;
        score.innerHTML = scoreNumber;
    }
}

function lifesCounting() {
    const ball = document.querySelector(".ball");
    lifesNumber -= 1;

    if (lifesNumber > 0) {
        lifes.innerHTML = lifesNumber;
        field.addEventListener("mousemove", platformBallMoving);
        field.addEventListener("mouseout", platformBallMovingToEnd);
        body.addEventListener("click", startMove);
        ballY = 575;
        ballX = 335;
        ball.style.top = 575 + "px";
        ball.style.left = 335 + "px";
        platform.style.top = 590 + "px";
        platform.style.left = 265 + "px";
    }

    if (lifesNumber === 0) {
        alert(`Game over\nYour score: ${scoreNumber}`);
        restart();
        bulletDeleting();
        lvl1();
        scoreNumber = 0;
        score.innerHTML = scoreNumber;
        lifesNumber = 3;
        lifes.innerHTML = lifesNumber;
    }
}

function ballMoveReset() {
    const ball = document.querySelector(".ball");
    ball.remove();
}

function ballMaking() {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    field.append(ball);
}

function bulletMaking() {
    const bullet1 = document.createElement("div");
    bullet1.classList.add("bullet");
    const bullet2 = document.createElement("div");
    bullet2.classList.add("bullet");
    const bullet3 = document.createElement("div");
    bullet3.classList.add("bullet");
    const bullet4 = document.createElement("div");
    bullet4.classList.add("bullet");

    field.append(bullet1);
    field.append(bullet2);
    field.append(bullet3);
    field.append(bullet4);
    
    bullet1.style.top = bullet1Y + "px";
    bullet1.style.left = 100 + "px";
    bullet2.style.top = bullet2Y + "px";
    bullet2.style.left = 263 + "px";
    bullet3.style.top = bullet3Y + "px";
    bullet3.style.left = 437 + "px";
    bullet4.style.top = bullet4Y + "px";
    bullet4.style.left = 600 + "px";
}

function bulletDeleting() {
    const bullets = document.querySelectorAll(".bullet");
    bullet1Y = 0;
    bullet2Y = 0;
    bullet3Y = 0;
    bullet4Y = 0;
    for (let bullet of bullets) {
        bullet.remove();
    }
}

function bullet1move() {
    const bullet = document.querySelectorAll(".bullet")[0];

    if (bullet == null) {return}

    const bulletCoords= bullet.getBoundingClientRect();
    const bulletCoordY = Math.round(bulletCoords.y);
    const bulletCoordX = bulletCoords.x;
    const platformCoords = platform.getBoundingClientRect();
    const platformCoordX = platformCoords.x;

    if (bulletCoordY !== platformCoordY) {
        setTimeout(() => {bullet1Y += 0.8; bullet.style.top = bullet1Y + "px"}, 5);
        setTimeout(bullet1move, 0);
    }

    if (bulletCoordY === platformCoordY && bulletCoordX >= (platformCoordX - 15) && bulletCoordX <= (platformCoordX - 15 + 160)) {
        setTimeout(ballMoveReset, 0);
        setTimeout(ballMaking, 10);
        setTimeout(lifesCounting, 10);
        bullet1Y = 0;
        bullet.style.top = bullet1Y + "px";
        bullet1move();
    }

    if (bulletCoordY === platformCoordY && (bulletCoordX < (platformCoordX - 15) || bulletCoordX > (platformCoordX - 15 + 160))) {
        bullet1Y = 0;
        bullet.style.top = bullet1Y + "px"
        bullet1move()
    }
}

function bullet2move() {
    const bullet = document.querySelectorAll(".bullet")[1];

    if (bullet == null) {return}

    const bulletCoords= bullet.getBoundingClientRect();
    const bulletCoordY = Math.round(bulletCoords.y);
    const bulletCoordX = bulletCoords.x;
    const platformCoords = platform.getBoundingClientRect();
    const platformCoordX = platformCoords.x;

    if (bulletCoordY !== platformCoordY) {
        setTimeout(() => {bullet2Y += 0.5; bullet.style.top = bullet2Y + "px"}, 5);
        setTimeout(bullet2move, 0);
    }

    if (bulletCoordY === platformCoordY && bulletCoordX >= (platformCoordX - 15) && bulletCoordX <= (platformCoordX - 15 + 160)) {
        setTimeout(ballMoveReset, 0);
        setTimeout(ballMaking, 10);
        setTimeout(lifesCounting, 10);
        bullet2Y = 0;
        bullet.style.top = bullet2Y + "px"
        bullet2move()
    }

    if (bulletCoordY === platformCoordY && (bulletCoordX < (platformCoordX - 15) || bulletCoordX > (platformCoordX - 15 + 160))) {
        bullet2Y = 0;
        bullet.style.top = bullet2Y + "px"
        bullet2move()
    }
}

function bullet3move() {
    const bullet = document.querySelectorAll(".bullet")[2];

    if (bullet == null) {return}

    const bulletCoords= bullet.getBoundingClientRect();
    const bulletCoordY = Math.round(bulletCoords.y);
    const bulletCoordX = bulletCoords.x;
    const platformCoords = platform.getBoundingClientRect();
    const platformCoordX = platformCoords.x;

    if (bulletCoordY !== platformCoordY) {
        setTimeout(() => {bullet3Y += 1.2; bullet.style.top = bullet3Y + "px"}, 5);
        setTimeout(bullet3move, 0);
    }

    if (bulletCoordY === platformCoordY && bulletCoordX >= (platformCoordX - 15) && bulletCoordX <= (platformCoordX - 15 + 160)) {
        setTimeout(ballMoveReset, 0);
        setTimeout(ballMaking, 10);
        setTimeout(lifesCounting, 10);
        bullet3Y = 0;
        bullet.style.top = bullet3Y + "px"
        bullet3move()
    }

    if (bulletCoordY === platformCoordY && (bulletCoordX < (platformCoordX - 15) || bulletCoordX > (platformCoordX - 15 + 160))) {
        bullet3Y = 0;
        bullet.style.top = bullet3Y + "px"
        bullet3move()
    }
}

function bullet4move() {
    const bullet = document.querySelectorAll(".bullet")[3];

    if (bullet == null) {return}

    const bulletCoords= bullet.getBoundingClientRect();
    const bulletCoordY = Math.round(bulletCoords.y);
    const bulletCoordX = bulletCoords.x;
    const platformCoords = platform.getBoundingClientRect();
    const platformCoordX = platformCoords.x;

    if (bulletCoordY !== platformCoordY) {
        setTimeout(() => {bullet4Y += 0.2; bullet.style.top = bullet4Y + "px"}, 5);
        setTimeout(bullet4move, 0);
    }

    if (bulletCoordY === platformCoordY && bulletCoordX >= (platformCoordX - 15) && bulletCoordX <= (platformCoordX - 15 + 160)) {
        setTimeout(ballMoveReset, 0);
        setTimeout(ballMaking, 10);
        setTimeout(lifesCounting, 10);
        bullet4Y = 0;
        bullet.style.top = bullet4Y + "px"
        bullet4move()
    }

    if (bulletCoordY === platformCoordY && (bulletCoordX < (platformCoordX - 15) || bulletCoordX > (platformCoordX - 15 + 160))) {
        bullet4Y = 0;
        bullet.style.top = bullet4Y + "px"
        bullet4move()
    }
}

function bulletsAttackStart() {
    if (lvlNumber >= (hardAfter + 1) && (hardAfter !== -1)) {
        bulletMaking();
        bullet1move();
        bullet2move();
        bullet3move();
        bullet4move();
    }
}

function startMove() {
    field.removeEventListener("mousemove", platformBallMoving);
    field.removeEventListener("mouseout", platformBallMovingToEnd);
    body.removeEventListener("click", startMove);
    body.removeEventListener("click", bulletsAttackStart);
    field.addEventListener("mousemove", platformMoving);
    field.addEventListener("mouseout", platformMovingToEnd);

    setTimeout(easyMoveUpLeft, 0);
}

function easyMoveUpLeft () {
    const ball = document.querySelector(".ball");

    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y + 30) && ballCoordX > (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
            
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(easyMoveDownLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(easyMoveDownLeft, 0);
        }

        if (ballCoordY < (recCoords.y + 30) && ballCoordY > recCoords.y && ballCoordX === (recCoords.x + 52)) {
            
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(easyMoveUpRight, 0);
            }

            scoreCounting(rec);

            rec.remove();

            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(easyMoveUpRight, 0);
        }
    }

    if (ballCoordY !== fieldCoordY && ballCoordX !== fieldCoordX) {
        setTimeout(() => {ballY -= 1; ballX -= 0.1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(easyMoveUpLeft, 0);
    }

    if (ballCoordX === fieldCoordX) {
        setTimeout(easyMoveUpRight, 0);
    }

    if (ballCoordY === fieldCoordY) {
        setTimeout(easyMoveDownLeft, 0);
    }
}

function easyMoveUpRight() {
    const ball = document.querySelector(".ball");

    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y + 30) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
           
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(easyMoveDownRight, 0);
            }

            scoreCounting(rec);

            rec.remove();

            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(easyMoveDownRight, 0);
        }

        if (ballCoordY < (recCoords.y + 30) && ballCoordY > recCoords.y && ballCoordX === (recCoords.x - 17)) {
            
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(easyMoveUpLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();

            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(easyMoveUpLeft, 0);
        }
    }

    if (ballCoordX !== (fieldCoordX + 690) && ballCoordY !== fieldCoordY) {
        setTimeout(() => {ballY -= 1; ballX += 0.1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(easyMoveUpRight, 0);
    }

    if (ballCoordX === (fieldCoordX + 690)) {
        setTimeout(easyMoveUpLeft, 0);
    }

    if (ballCoordY == fieldCoordY) {
        setTimeout(easyMoveDownRight, 0);
    }
}

function mediumMoveUpLeft() {
    const ball = document.querySelector(".ball");

    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y + 30) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(mediumMoveDownLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(mediumMoveDownLeft, 0);
        }

        if (ballCoordY < (recCoords.y + 30) && ballCoordY > recCoords.y && ballCoordX === (recCoords.x + 52)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(mediumMoveUpRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(mediumMoveUpRight, 0);
        }
    }

    if (ballCoordY !== fieldCoordY && ballCoordX !== fieldCoordX) {
        setTimeout(() => {ballY -= 1; ballX -= 1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(mediumMoveUpLeft, 0);
    }

    if (ballCoordX === fieldCoordX) {
        setTimeout(mediumMoveUpRight, 0);
    }

    if (ballCoordY === fieldCoordY) {
        setTimeout(mediumMoveDownLeft, 0);
    }
}

function mediumMoveUpRight() {
    const ball = document.querySelector(".ball");

    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y + 30) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(mediumMoveDownRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(mediumMoveDownRight, 0);
        }

        if (ballCoordY < (recCoords.y + 30) && ballCoordY > recCoords.y && ballCoordX === (recCoords.x -17)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(mediumMoveUpLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(mediumMoveUpLeft, 0);
        }
    }

    if (ballCoordX !== (fieldCoordX + 690) && ballCoordY  !== fieldCoordY) {
        setTimeout(() => {ballY -= 1; ballX += 1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(mediumMoveUpRight, 0);
    }

    if (ballCoordX === (fieldCoordX + 690)) {
        setTimeout(mediumMoveUpLeft, 0);
    }

    if (ballCoordY == fieldCoordY) {
        setTimeout(mediumMoveDownRight, 0);
    }
}

function hardMoveUpLeft() {
    const ball = document.querySelector(".ball");
    
    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");
    
    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y + 30) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(hardMoveDownLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(hardMoveDownLeft, 0);
        }

        if (ballCoordY < (recCoords.y + 30) && ballCoordY > recCoords.y && ballCoordX === (recCoords.x + 52)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(hardMoveUpRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(hardMoveUpRight, 0);
        }
    }

    if (ballCoordY !== fieldCoordY && ballCoordX !== fieldCoordX) {
        setTimeout(() => {ballY -= 0.2; ballX -= 1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(hardMoveUpLeft, 0);
    }

    if (ballCoordX === fieldCoordX) {
        setTimeout(hardMoveUpRight, 0);
    }

    if (ballCoordY === fieldCoordY) {
        setTimeout(hardMoveDownLeft, 0);
    }
}

function hardMoveUpRight() {
    const ball = document.querySelector(".ball");
    
    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y + 30) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 52)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(hardMoveDownRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(hardMoveDownRight, 0);
        }

        if (ballCoordY < (recCoords.y + 30) && ballCoordY > recCoords.y && ballCoordX === (recCoords.x -17)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(hardMoveUpLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(hardMoveUpLeft, 0);
        }
    }

    if (ballCoordX !== (fieldCoordX + 690) && ballCoordY !== fieldCoordY) {
        setTimeout(() => {ballY -= 0.2; ballX += 1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(hardMoveUpRight, 0);
    }

    if (ballCoordX === (fieldCoordX + 690)) {
        setTimeout(hardMoveUpLeft, 0);
    }

    if (ballCoordY == fieldCoordY) {
        setTimeout(hardMoveDownRight, 0);
    }
}

function easyMoveDownLeft() {
    const ball = document.querySelector(".ball");
    
    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y - 10) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(easyMoveUpLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(easyMoveUpLeft, 0);
        }

        if (ballCoordY > recCoords.y && ballCoordY < (recCoords.y + 30) && ballCoordX === (recCoords.x + 52)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(easyMoveDownRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(easyMoveDownRight, 0);
        }
    }

    if (ballCoordY !== platformCoordY && ballCoordX !== fieldCoordX) {
        setTimeout(() => {ballY += 1; ballX -= 0.1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(easyMoveDownLeft, 0);
    }

    if (ballCoordX === fieldCoordX) {
        setTimeout(easyMoveDownRight, 0);
    }

    if (ballCoordY === platformCoordY) {
        setTimeout(moveFromPlatform, 0);
    }
}

function easyMoveDownRight() {
    const ball = document.querySelector(".ball");
    
    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");
    
    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y - 10) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 52)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(easyMoveUpRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(easyMoveUpRight, 0);
        }

        if (ballCoordY > recCoords.y && ballCoordY < (recCoords.y + 30) && ballCoordX === (recCoords.x - 17)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(easyMoveDownLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(easyMoveDownLeft, 0);
        }
    }

    if (ballCoordX !== (fieldCoordX + 690) && ballCoordY !== platformCoordY) {
        setTimeout(() => {ballY += 1; ballX += 0.1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(easyMoveDownRight, 0);
    }

    if (ballCoordX === (fieldCoordX + 690)) {
        setTimeout(easyMoveDownLeft, 0);
    }

    if (ballCoordY === platformCoordY) {
        setTimeout(moveFromPlatform, 0);
    }
}

function mediumMoveDownLeft() {
    const ball = document.querySelector(".ball");
    
    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y - 10) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(mediumMoveUpLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(mediumMoveUpLeft, 0);
        }

        if (ballCoordY > recCoords.y && ballCoordY < (recCoords.y + 30) && ballCoordX === (recCoords.x + 52)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(mediumMoveDownRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(mediumMoveDownRight, 0);
        }
    }

    if (ballCoordY !== platformCoordY && ballCoordX !== fieldCoordX) {
        setTimeout(() => {ballY += 1; ballX -= 1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(mediumMoveDownLeft, 0);
    }

    if (ballCoordX === fieldCoordX) {
        setTimeout(mediumMoveDownRight, 0);
    }

    if (ballCoordY === platformCoordY) {
        setTimeout(moveFromPlatform, 0);
    }
}

function mediumMoveDownRight() {
    const ball = document.querySelector(".ball");
    
    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y - 10) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(mediumMoveUpRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(mediumMoveUpRight, 0);
        }

        if (ballCoordY > recCoords.y && ballCoordY < (recCoords.y + 30) && ballCoordX === (recCoords.x - 17)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(mediumMoveDownLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(mediumMoveDownLeft, 0);
        }
    }

    if (ballCoordX !== (fieldCoordX + 690) && ballCoordY !== platformCoordY) {
        setTimeout(() => {ballY += 1; ballX += 1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(mediumMoveDownRight, 0);
    }

    if (ballCoordX === (fieldCoordX + 690)) {
        setTimeout(mediumMoveDownLeft, 0);
    }

    if (ballCoordY === platformCoordY) {
        setTimeout(moveFromPlatform, 0);
    }
}

function hardMoveDownLeft() {
    const ball = document.querySelector(".ball");
    
    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y - 10) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(hardMoveUpLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(hardMoveUpLeft, 0);
        }

        if (ballCoordY > recCoords.y && ballCoordY < (recCoords.y + 30) && ballCoordX === (recCoords.x + 52)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(hardMoveDownRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(hardMoveDownRight, 0);
        }
    }

    if (ballCoordY !== platformCoordY && ballCoordX !== fieldCoordX) {
        setTimeout(() => {ballY += 0.2; ballX -= 1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(hardMoveDownLeft, 0);
    }

    if (ballCoordX === fieldCoordX) {
        setTimeout(hardMoveDownRight, 0);
    }

    if (ballCoordY === platformCoordY) {
        setTimeout(moveFromPlatform, 0);
    }
}

function hardMoveDownRight() {
    const ball = document.querySelector(".ball");
    
    if (ball == null) {return}

    const ballCoords = ball.getBoundingClientRect();
    const ballCoordY = Math.round(ballCoords.y);
    const ballCoordX = Math.round(ballCoords.x);
    const rectangles = document.getElementsByClassName("rectangles");

    for (let rec of rectangles) {
        const recCoords = rec.getBoundingClientRect();

        if (ballCoordY === (recCoords.y - 10) && ballCoordX >= (recCoords.x - 15) && ballCoordX <= (recCoords.x + 50)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(hardMoveUpRight, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(hardMoveUpRight, 0);
        }

        if (ballCoordY > recCoords.y && ballCoordY < (recCoords.y + 30) && ballCoordX === (recCoords.x - 17)) {
              
            if (rec.classList.contains("redRectangle")) {
                rec.classList.remove("redRectangle");
                rec.classList.add("orangeRectangle");
                return setTimeout(hardMoveDownLeft, 0);
            }

            scoreCounting(rec);

            rec.remove();
            
            if (!rectangles.length) {
                switch(lvlNumber) {
                    case 1:
                        return lvl2();
                    case 2:
                        return lvl3();
                    case 3:
                        return lvl4();
                    case 4:
                        return lvl5();
                    case 5:
                        return lvl1();
                }
            }
            return setTimeout(hardMoveDownLeft, 0);
        }
    }

    if (ballCoordX !== (fieldCoordX + 690) && ballCoordY !== platformCoordY) {
        setTimeout(() => {ballY += 0.2; ballX += 1; ball.style.top = ballY + "px"; ball.style.left = ballX + "px"}, 5);
        setTimeout(hardMoveDownRight, 0);
    }

    if (ballCoordX === (fieldCoordX + 690)) {
        setTimeout(hardMoveDownLeft, 0);
    }

    if (ballCoordY === platformCoordY) {
        setTimeout(moveFromPlatform, 0);
    }
}

function moveFromPlatform () {
    const ball = document.querySelector(".ball");
    const ballCoords = ball.getBoundingClientRect();
    const ballCoordX = Math.round(ballCoords.x);
    const platformCoords = platform.getBoundingClientRect();
    const platformCoordX = platformCoords.x;

    if (ballCoordX < (platformCoordX - 15) || ballCoordX > (platformCoordX - 15 + 160)) {
        lifesCounting();
    }

    if (ballCoordX >= (platformCoordX - 15) && ballCoordX < (platformCoordX - 15 + 10)) {
        setTimeout(hardMoveUpLeft, 0);
    }

    if (ballCoordX >= (platformCoordX - 15 + 10) && ballCoordX < (platformCoordX -15 + 35)) {
        setTimeout(mediumMoveUpLeft, 0);
    }

    if (ballCoordX >= (platformCoordX - 15 + 35) && ballCoordX < (platformCoordX -15 + 80)) {
        setTimeout(easyMoveUpLeft, 0);
    }

    if (ballCoordX >= (platformCoordX - 15 + 80) && ballCoordX < (platformCoordX -15 + 125)) {
        setTimeout(easyMoveUpRight, 0);
    }

    if (ballCoordX >= (platformCoordX - 15 + 125) && ballCoordX < (platformCoordX -15 + 150)) {
        setTimeout(mediumMoveUpRight, 0);
    }

    if (ballCoordX >= (platformCoordX - 15 + 150) && ballCoordX <= (platformCoordX - 15 + 160)) {
        setTimeout(hardMoveUpRight, 0);
    }
}

function platformBallMoving(e) {
    const ball = document.querySelector(".ball");
    const coords = e.pageX - fieldCoordX;
    if (coords <= 552) {
        platform.style.left = coords + "px";
        ball.style.left = coords + 70 + "px";
        ballX = coords + 70;
    }
}

function platformBallMovingToEnd(e) {
    const ball = document.querySelector(".ball");
    const coords = e.pageX - fieldCoordX;
    
    if (coords > 552) {
        platform.style.left = 552 + "px";
        ball.style.left = 552 + 70 + "px";
        ballX = 552 + 70;
    }
    
    if (coords < 0) {
        platform.style.left = -2 + "px";
        ball.style.left = 68 + "px";
        ballX = 68;
    }
}

function platformMoving(e) {
    const coords = e.pageX - fieldCoordX;
    if (coords <= 552) {
        platform.style.left = coords + "px";
    }
}

function platformMovingToEnd(e) {
    const coords = e.pageX - fieldCoordX;
    
    if (coords > 552) {
        platform.style.left = 552 + "px";
    }
    
    if (coords < 0) {
        platform.style.left = -2 + "px";
    }
}



