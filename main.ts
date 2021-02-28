namespace SpriteKind {
    export const friend = SpriteKind.create()
    export const trapLevel1 = SpriteKind.create()
    export const flame = SpriteKind.create()
    export const pika = SpriteKind.create()
}
function surroundingCells () {
    sCells = 0
    if (0 == 0) {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.pika, function (sprite, otherSprite) {
    game.splash("Pika Pika!", "(I'm so happy to see you")
    game.splash("\"Pika Pika Chu!\"", "(Let's go home and play)")
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    hasTreasureKey = 1
    mySprite.say("A key?", 1000)
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.floorLight1, function (sprite, location) {
    if (currentLevel == 3) {
        if (sprite.vx == 50 && sprite.vy == 0) {
            sprite.setVelocity(0, 50)
            sprite.x += -3
        } else if (sprite.vx == 0 && sprite.vy == 50) {
            sprite.setVelocity(-50, 0)
            sprite.y += -3
        } else if (sprite.vx == -50 && sprite.vy == 0) {
            sprite.setVelocity(0, -50)
            sprite.x += 3
        } else if (sprite.vx == 0 && sprite.vy == -50) {
            sprite.setVelocity(50, 0)
            sprite.y += 3
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    info.changeScoreBy(80)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    let doorSwitch = 0
    if (currentLevel == 0 && (tiles.locationXY(location, tiles.XY.column) == 6 && tiles.locationXY(location, tiles.XY.row) == 5 && foundTorch == 0)) {
        mySprite.setImage(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . 2 . . . 
            . . . . f 1 5 2 5 1 6 f 2 . . . 
            . . . f 1 6 6 6 6 6 1 2 5 2 . . 
            . . . f 6 6 f f f f 6 2 5 2 . . 
            . . . f 6 f f d d f f 5 5 5 . . 
            . . f 6 f d f d d f d f 5 f . . 
            . . f 6 f d 3 d d 3 d f e f . . 
            . . f 6 6 f d d d d f 6 e f . . 
            . f 6 6 f 3 f f f f 3 f e 6 f . 
            . . f f d 3 5 3 3 5 3 d e f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.say("I found a torch!", 500)
        music.bigCrash.play()
        music.bigCrash.play()
        music.bigCrash.play()
        foundTorch = 1
        monkey.x += -32
        animation.runImageAnimation(
        monkey,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e f f e e e f . . 
            f f . f e e e e e f f f f f . . 
            f e . f e e f f e e f b d f . . 
            f e . f e e e f f e f d d f f . 
            f e f f e f b b e f f f f f f . 
            f f f f e b d d e e e f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f e e e e e f . . . . 
            . . . . f e e d d d d d f . . . 
            . . . f f e d f f d d f f f . . 
            . . f d d e d d d d e e d d c . 
            . f f f d e d d c d d d d c c . 
            f d b f d e d d d c c c c d c . 
            f d d f f e e d d d d d d c . . 
            f f f e f f e e d d d d c . . . 
            . . f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f e e e e e f . . . . 
            . . . . f e d d d d d d f . . . 
            . . . f f d f f d d f f d f . . 
            . . f d e d d d d e e d d d c . 
            . . f f e d d c d d d d c d c . 
            f f f f e d d d c c c c d d c . 
            f d b f f e d d d d d d d c . . 
            f d d f f f e e d d d d c . . . 
            f f f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f f f f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d d d d f . . 
            . . . f d d e e d f f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d f f c 
            . . . . f e e e f f f e f d d f 
            . . . . f f f f f e e e f d d f 
            . f f . f f e e e e e f f f f f 
            . f e . f f e e e f f e f f f . 
            . f e f f f b b f f e f d b f . 
            . f e f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d f d d f . . 
            . . . f d d e e d d f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . f c f e e d d d f f f f c 
            . . . . f e e e e f f f d b f . 
            . . . . f e e f f f e f d d f . 
            . f f . f f f e e e e f f f . . 
            . f e . f f e e e e f e e f . . 
            . f e f f f f f f f e e e f f . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d e e f f d d f . 
            . . f f f f f f f f f f f f f . 
            `],
        500,
        true
        )
        tiles.setWallAt(tiles.getTileLocation(9, 14), false)
        monkey.say("Good luck!")
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.vy += 30
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 . f f . 2 . . . . . 
                . . . . 2 f b . . b f 2 . . . . 
                . . . . . b b b b b b . . . . . 
                . . . 2 . . b c b b . . 2 . . . 
                . . . 2 . . b c c b . . 2 . . . 
                . . . . . b b b b b b . . . . . 
                . . . . 2 f b . . b f 2 . . . . 
                . . . . . 2 . f f . 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
    if (currentLevel == 3 && (tiles.locationXY(location, tiles.XY.column) == 6 && tiles.locationXY(location, tiles.XY.row) == 5 && pathSwitch == 0)) {
        if (game.ask("A Switch.", "Should I pull it?") == true) {
            pathSwitch = 1
            // not actually bashers, just reusing array
            bashersX = [
            9,
            9,
            9,
            8,
            8,
            7,
            6,
            6,
            6,
            7,
            8,
            8,
            8,
            7
            ]
            bashersY = [
            8,
            9,
            10,
            10,
            11,
            11,
            11,
            12,
            13,
            13,
            13,
            14,
            15,
            15
            ]
            for (let index = 0; index <= bashersX.length; index++) {
                tiles.setTileAt(tiles.getTileLocation(bashersX[index], bashersY[index]), sprites.castle.tilePath5)
            }
        }
    }
    if (currentLevel == 3 && (tiles.locationXY(location, tiles.XY.column) == 12 && tiles.locationXY(location, tiles.XY.row) == 12) && doorSwitch == 0 && game.ask("Should i pull", "this switch?") == true) {
        tiles.setWallAt(tiles.getTileLocation(11, 16), false)
        tiles.setWallAt(tiles.getTileLocation(11, 17), false)
        tiles.setWallAt(tiles.getTileLocation(13, 16), false)
        tiles.setWallAt(tiles.getTileLocation(13, 17), false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flame, function (sprite, otherSprite) {
    info.changeLifeBy(-5)
})
function level_0 () {
    scene.setBackgroundColor(12)
    tileNow = tiles.createMap(tilemap`level2`)
    tiles.loadMap(tileNow)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 14))
    monkey = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `, SpriteKind.friend)
    animation.runImageAnimation(
    monkey,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f f e e e e e f . f f 
        . . f d b f e e f f e e f . e f 
        . f f d d f e f f e e e f . e f 
        . f f f f f f e b b f e f f e f 
        . f d d f e e e d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f d d d d d e e f . . . . 
        . . f f f d d f f d e f f . . . 
        . c d d e e d d d d e d d f . . 
        . c c d d d d c d d e d f f f . 
        . c d c c c c d d d e d f b d f 
        . . c d d d d d d e e f f d d f 
        . . . c d d d d e e f f e f f f 
        . . . . f f f e e f e e e f . . 
        . . . . f e e e e e e e f f f . 
        . . . f e e e e e e f f f e f . 
        . . f f e e e e f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f e e f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f d d d d d d e f . . . . 
        . . f d f f d d f f d f f . . . 
        . c d d d e e d d d d e d f . . 
        . c d c d d d d c d d e f f . . 
        . c d d c c c c d d d e f f f f 
        . . c d d d d d d d e f f b d f 
        . . . c d d d d e e f f f d d f 
        . . . . f f f e e f e e e f f f 
        . . . . f e e e e e e e f f f . 
        . . . f e e e e e e f f f e f . 
        . . f f e e e e f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f f f f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d d d d e e f f . . . . 
        . c d d d f f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c f f d d c d d e e b d c . . . 
        f d d f e f f f e e e f . . . . 
        f d d f e e e f f f f f . . . . 
        f f f f f e e e e e f f . f f . 
        . f f f e f f e e e f f . e f . 
        . f b d f e f f b b f f f e f . 
        . f d d f e e f d d b f f e f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d f d d e e f f . . . . 
        . c d d d f d d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c f f f f d d d e e f c f . . . 
        . f b d f f f e e e e f . . . . 
        . f d d f e f f f e e f . . . . 
        . . f f f e e e e f f f . f f . 
        . . f e e f e e e e f f . e f . 
        . f f e e e f f f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f f e e d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(monkey, tiles.getTileLocation(9, 14))
    spawnEnemies0()
    text_list = [
    "Ooh, ooh, ooh!",
    "Orange orb ",
    "takes you ",
    "to next floor",
    "But all dark.",
    "Find torch.",
    "You!",
    "You, lady!",
    "Find Torch!",
    "Then let you pass"
    ]
    for (let index = 0; index <= text_list.length; index++) {
        monkey.say(text_list[index], 1000)
        pause(1000)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    info.changeScoreBy(30)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    info.changeScoreBy(50)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.trapLevel1, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Invisible, false)
    timer.after(500, function () {
        if (nastyTrapTrigger == 0) {
            nastyTrapTrigger = 1
            game.splash("This is a nasty trap!", "A nasty, nasty trap!")
            game.splash("Your light or your life!", "I'll let you choose:")
            nastyTrap = game.ask("Lose your torch (a)", "or half your life (b)")
            if (nastyTrap == true) {
                torchRadius = 0
                mySprite.setImage(img`
                    . . . . . . 5 . 5 . . . . . . . 
                    . . . . . f 5 5 5 f f . . . . . 
                    . . . . f 1 5 2 5 1 6 f . . . . 
                    . . . f 1 6 6 6 6 6 1 6 f . . . 
                    . . . f 6 6 f f f f 6 1 f . . . 
                    . . . f 6 f f d d f f 6 f . . . 
                    . . f 6 f d f d d f d f 6 f . . 
                    . . f 6 f d 3 d d 3 d f 6 f . . 
                    . . f 6 6 f d d d d f 6 6 f . . 
                    . f 6 6 f 3 f f f f 3 f 6 6 f . 
                    . . f f d 3 5 3 3 5 3 d f f . . 
                    . . f d d f 3 5 5 3 f d d f . . 
                    . . . f f 3 3 3 3 3 3 f f . . . 
                    . . . f 3 3 5 3 3 5 3 3 f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else {
                info.setLife(Math.constrain(info.life() / 2, 1, 1000))
            }
            nastyTrapTrigger = 2
        }
        if (nastyTrapTrigger == 2) {
            for (let index2 = 0; index2 < 6; index2++) {
                otherSprite.setFlag(SpriteFlag.Invisible, true)
                pause(200)
                otherSprite.setFlag(SpriteFlag.Invisible, false)
                pause(200)
            }
            otherSprite.destroy()
        }
    })
})
function createMaze (height: number, width: number) {
    cell = "c"
    wall = "w"
    unvisited = "u"
    maze = []
    for (let index = 0; index <= height - 1; index++) {
        line = []
        for (let index2 = 0; index2 <= width - 1; index2++) {
            line.push("u")
        }
        maze.push(line)
    }
    startingHeight = Math.trunc(randint(0, 1000) / 1000 * tiles.tilemapRows())
    startingWidth = Math.trunc(randint(0, 1000) / 1000 * tiles.tilemapColumns())
    if (startingHeight == 0) {
        startingHeight += 1
    }
    if (startingHeight == tiles.tilemapRows() - 1) {
        startingHeight += -1
    }
    if (startingWidth == 0) {
        startingWidth += 1
    }
    if (startingWidth == tiles.tilemapColumns() - 1) {
        startingWidth += -1
    }
    tempRow = maze[startingHeight]
    tempRow[startingWidth] = cell
    maze[startingHeight] = tempRow
    walls = []
    walls.push([startingHeight - 1, startingWidth])
    return 0
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(10000)
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (recentHit == 1) {
        recentHit = 0
    }
    if (currentLevel == 3) {
        if (sprite.vx == 50 && sprite.vy == 0) {
            sprite.setVelocity(0, 50)
        } else if (sprite.vx == 0 && sprite.vy == 50) {
            sprite.setVelocity(-50, 0)
        } else if (sprite.vx == -50 && sprite.vy == 0) {
            sprite.setVelocity(0, -50)
        } else if (sprite.vx == 0 && sprite.vy == -50) {
            sprite.setVelocity(50, 0)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    info.changeScoreBy(3)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
function spawnEnemies0 () {
    bashersX = [2, 7, 13]
    bashersY = [2, 8, 13]
    for (let value of bashersX) {
        for (let value2 of bashersY) {
            if (value == 7 && value2 == 13) {
                continue;
            }
            bashers = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f . . . . f . . . . . 
                . . . . f . b . . b . f . . . . 
                . . . . . b b b b b b . . . . . 
                . . . f . . b c b b . . f . . . 
                . . . f . . b c c b . . f . . . 
                . . . . . b b b b b b . . . . . 
                . . . . f . b . . b . f . . . . 
                . . . . . f . . . . f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(bashers, tiles.getTileLocation(value, value2))
            bashers.setVelocity(randint(0, 80) + 50, 0)
            bashers.setBounceOnWall(true)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (currentLevel == 4) {
        currentLevel = 3
        controller.moveSprite(mySprite, 0, 0)
        mySprite.setVelocity(0, 25)
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . f f 6 f f f . . . . . . 
            . f f f d f 6 6 6 6 f f f . . . 
            . f 3 f d d f 6 f f 6 6 1 f . . 
            . f 3 3 f 3 3 f d d f 6 6 1 f . 
            . f 5 3 3 5 f d 3 f f f 6 5 5 5 
            . f 3 3 5 3 f d d d d f 6 2 5 . 
            . f 3 3 5 3 f d d d d f 6 5 5 5 
            . f 5 3 3 5 f d 3 f f f 6 1 f . 
            . f 3 3 f 3 3 f d d f 6 1 6 f . 
            . f 3 f d d f 6 f f 6 1 6 f . . 
            . f f f d f 6 6 6 6 f f f . . . 
            . . . . f f 6 f f f . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . f f f 6 f f . . . . 
            . . . f f f 6 6 6 6 f d f f f . 
            . . f 6 1 6 f f 6 f d d f 3 f . 
            . f 6 1 6 f d d f 3 3 f 3 3 f . 
            . f 1 6 f f f 3 d f 5 3 3 5 f . 
            5 5 5 6 f d d d d f 3 5 3 3 f . 
            . 5 2 6 f d d d d f 3 5 3 3 f . 
            5 5 5 6 f f f 3 d f 5 3 3 5 f . 
            . f 1 6 6 f d d f 3 3 f 3 3 f . 
            . . f 1 6 6 f f 6 f d d f 3 f . 
            . . . f f f 6 6 6 6 f d f f f . 
            . . . . . . f f f 6 f f . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . f f 6 f f f . . . . . . 
            . f f f d f 6 6 6 6 f f f . . . 
            . f 3 f d d f 6 f f 6 6 1 f . . 
            . f 3 3 f 3 3 f d d f 6 6 1 f . 
            . f 5 3 3 5 f d 3 f f f 6 5 5 5 
            . f 3 3 5 3 f d d d d f 6 2 5 . 
            . f 3 3 5 3 f d d d d f 6 5 5 5 
            . f 5 3 3 5 f d 3 f f f 6 1 f . 
            . f 3 3 f 3 3 f d d f 6 1 6 f . 
            . f 3 f d d f 6 f f 6 1 6 f . . 
            . f f f d f 6 6 6 6 f f f . . . 
            . . . . f f 6 f f f . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . . f 1 6 f f f f 6 6 f . . . 
            . . . f 6 1 6 6 6 6 6 1 f . . . 
            . . . . f 6 1 5 2 5 1 f . . . . 
            . . . . . f f 5 5 5 f . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . f f f 6 f f . . . . 
            . . . f f f 6 6 6 6 f d f f f . 
            . . f 6 1 6 f f 6 f d d f 3 f . 
            . f 6 1 6 f d d f 3 3 f 3 3 f . 
            . f 1 6 f f f 3 d f 5 3 3 5 f . 
            5 5 5 6 f d d d d f 3 5 3 3 f . 
            . 5 2 6 f d d d d f 3 5 3 3 f . 
            5 5 5 6 f f f 3 d f 5 3 3 5 f . 
            . f 1 6 6 f d d f 3 3 f 3 3 f . 
            . . f 1 6 6 f f 6 f d d f 3 f . 
            . . . f f f 6 6 6 6 f d f f f . 
            . . . . . . f f f 6 f f . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . f f 6 f f f . . . . . . 
            . f f f d f 6 6 6 6 f f f . . . 
            . f 3 f d d f 6 f f 6 6 1 f . . 
            . f 3 3 f 3 3 f d d f 6 6 1 f . 
            . f 5 3 3 5 f d 3 f f f 6 5 5 5 
            . f 3 3 5 3 f d d d d f 6 2 5 . 
            . f 3 3 5 3 f d d d d f 6 5 5 5 
            . f 5 3 3 5 f d 3 f f f 6 1 f . 
            . f 3 3 f 3 3 f d d f 6 1 6 f . 
            . f 3 f d d f 6 f f 6 1 6 f . . 
            . f f f d f 6 6 6 6 f f f . . . 
            . . . . f f 6 f f f . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . . f 1 6 f f f f 6 6 f . . . 
            . . . f 6 1 6 6 6 6 6 1 f . . . 
            . . . . f 6 1 5 2 5 1 f . . . . 
            . . . . . f f 5 5 5 f . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . f f f 6 f f . . . . 
            . . . f f f 6 6 6 6 f d f f f . 
            . . f 6 1 6 f f 6 f d d f 3 f . 
            . f 6 1 6 f d d f 3 3 f 3 3 f . 
            . f 1 6 f f f 3 d f 5 3 3 5 f . 
            5 5 5 6 f d d d d f 3 5 3 3 f . 
            . 5 2 6 f d d d d f 3 5 3 3 f . 
            5 5 5 6 f f f 3 d f 5 3 3 5 f . 
            . f 1 6 6 f d d f 3 3 f 3 3 f . 
            . . f 1 6 6 f f 6 f d d f 3 f . 
            . . . f f f 6 6 6 6 f d f f f . 
            . . . . . . f f f 6 f f . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        false
        )
        timer.after(800, function () {
            animation.runImageAnimation(
            sprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . f f 6 f f f . . . . . . 
                . f f f d f 6 6 6 6 f f f . . . 
                . f 3 f d d f 6 f f 6 6 1 f . . 
                . f 3 3 f 3 3 f d d f 6 6 1 f . 
                . f 5 3 3 5 f d 3 f f f 6 5 5 5 
                . f 3 3 5 3 f d d d d f 6 2 5 . 
                . f 3 3 5 3 f d d d d f 6 5 5 5 
                . f 5 3 3 5 f d 3 f f f 6 1 f . 
                . f 3 3 f 3 3 f d d f 6 1 6 f . 
                . f 3 f d d f 6 f f 6 1 6 f . . 
                . f f f d f 6 6 6 6 f f f . . . 
                . . . . f f 6 f f f . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . f . . . . . . 
                . . . . . . f f f 6 f f . . . . 
                . . . f f f 6 6 6 6 f d f f f . 
                . . f 6 1 6 f f 6 f d d f 3 f . 
                . f 6 1 6 f d d f 3 3 f 3 3 f . 
                . f 1 6 f f f 3 d f 5 3 3 5 f . 
                5 5 5 6 f d d d d f 3 5 3 3 f . 
                . 5 2 6 f d d d d f 3 5 3 3 f . 
                5 5 5 6 f f f 3 d f 5 3 3 5 f . 
                . f 1 6 6 f d d f 3 3 f 3 3 f . 
                . . f 1 6 6 f f 6 f d d f 3 f . 
                . . . f f f 6 6 6 6 f d f f f . 
                . . . . . . f f f 6 f f . . . . 
                . . . . . . . . . f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . f f 6 f f f . . . . . . 
                . f f f d f 6 6 6 6 f f f . . . 
                . f 3 f d d f 6 f f 6 6 1 f . . 
                . f 3 3 f 3 3 f d d f 6 6 1 f . 
                . f 5 3 3 5 f d 3 f f f 6 5 5 5 
                . f 3 3 5 3 f d d d d f 6 2 5 . 
                . f 3 3 5 3 f d d d d f 6 5 5 5 
                . f 5 3 3 5 f d 3 f f f 6 1 f . 
                . f 3 3 f 3 3 f d d f 6 1 6 f . 
                . f 3 f d d f 6 f f 6 1 6 f . . 
                . f f f d f 6 6 6 6 f f f . . . 
                . . . . f f 6 f f f . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . . f 1 6 f f f f 6 6 f . . . 
                . . . f 6 1 6 6 6 6 6 1 f . . . 
                . . . . f 6 1 5 2 5 1 f . . . . 
                . . . . . f f 5 5 5 f . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . f . . . . . . 
                . . . . . . f f f 6 f f . . . . 
                . . . f f f 6 6 6 6 f d f f f . 
                . . f 6 1 6 f f 6 f d d f 3 f . 
                . f 6 1 6 f d d f 3 3 f 3 3 f . 
                . f 1 6 f f f 3 d f 5 3 3 5 f . 
                5 5 5 6 f d d d d f 3 5 3 3 f . 
                . 5 2 6 f d d d d f 3 5 3 3 f . 
                5 5 5 6 f f f 3 d f 5 3 3 5 f . 
                . f 1 6 6 f d d f 3 3 f 3 3 f . 
                . . f 1 6 6 f f 6 f d d f 3 f . 
                . . . f f f 6 6 6 6 f d f f f . 
                . . . . . . f f f 6 f f . . . . 
                . . . . . . . . . f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . f f 6 f f f . . . . . . 
                . f f f d f 6 6 6 6 f f f . . . 
                . f 3 f d d f 6 f f 6 6 1 f . . 
                . f 3 3 f 3 3 f d d f 6 6 1 f . 
                . f 5 3 3 5 f d 3 f f f 6 5 5 5 
                . f 3 3 5 3 f d d d d f 6 2 5 . 
                . f 3 3 5 3 f d d d d f 6 5 5 5 
                . f 5 3 3 5 f d 3 f f f 6 1 f . 
                . f 3 3 f 3 3 f d d f 6 1 6 f . 
                . f 3 f d d f 6 f f 6 1 6 f . . 
                . f f f d f 6 6 6 6 f f f . . . 
                . . . . f f 6 f f f . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . . f 1 6 f f f f 6 6 f . . . 
                . . . f 6 1 6 6 6 6 6 1 f . . . 
                . . . . f 6 1 5 2 5 1 f . . . . 
                . . . . . f f 5 5 5 f . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . f . . . . . . 
                . . . . . . f f f 6 f f . . . . 
                . . . f f f 6 6 6 6 f d f f f . 
                . . f 6 1 6 f f 6 f d d f 3 f . 
                . f 6 1 6 f d d f 3 3 f 3 3 f . 
                . f 1 6 f f f 3 d f 5 3 3 5 f . 
                5 5 5 6 f d d d d f 3 5 3 3 f . 
                . 5 2 6 f d d d d f 3 5 3 3 f . 
                5 5 5 6 f f f 3 d f 5 3 3 5 f . 
                . f 1 6 6 f d d f 3 3 f 3 3 f . 
                . . f 1 6 6 f f 6 f d d f 3 f . 
                . . . f f f 6 6 6 6 f d f f f . 
                . . . . . . f f f 6 f f . . . . 
                . . . . . . . . . f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                `],
            200,
            false
            )
        })
        timer.after(2500, function () {
            lvl3X = 11
            lvl3Y = 13
            scene.cameraShake(4, 500)
            mySprite.setImage(img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                `)
        })
    }
})
info.onLifeZero(function () {
    game.over(false)
})
function spawnEnemies3 () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . f . b . . b . f . . . . 
        . . . . . b b b b b b . . . . . 
        . . . f . . b c b b . . f . . . 
        . . . f . . b c c b . . f . . . 
        . . . . . b b b b b b . . . . . 
        . . . . f . b . . b . f . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(17, 9))
    mySprite2.setVelocity(-50, 0)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . f . b . . b . f . . . . 
        . . . . . b b b b b b . . . . . 
        . . . f . . b c b b . . f . . . 
        . . . f . . b c c b . . f . . . 
        . . . . . b b b b b b . . . . . 
        . . . . f . b . . b . f . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(17, 13))
    mySprite2.setVelocity(50, 0)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . f . b . . b . f . . . . 
        . . . . . b b b b b b . . . . . 
        . . . f . . b c b b . . f . . . 
        . . . f . . b c c b . . f . . . 
        . . . . . b b b b b b . . . . . 
        . . . . f . b . . b . f . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 6))
    mySprite2.setVelocity(50, 0)
    mySprite2 = sprites.create(img`
        ..............f...
        ff...........f5f..
        fff.........f55f..
        fff........f555f..
        ff5f......f5555f..
        f55ff....f5fffffff
        ff55fffffffff555ff
        .f5555555555555ff.
        .f55555555555ff...
        .ff555555555ff....
        .f55555555555f....
        .f51f555551f5f....
        ff5ff55555ff5ff...
        f525555f555525f...
        ff22555555522ff...
        .ff2555f5552ff....
        ff55555555555ff...
        f5555555555555f...
        f55f5555555f55f...
        f5f555555555f5f...
        .f55555555555ff...
        .ff555fff555ff....
        f55fffffffff55f...
        .fff.......fff....
        ..................
        `, SpriteKind.pika)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 23))
}
function spawnEnemies2 () {
    lightningX = []
    for (let index = 0; index <= 7; index++) {
        lightningX.push(56 + 48 * index)
    }
    lightningY = 60
    for (let value2 of lightningX) {
        lightning = sprites.create(img`
            .........89.....
            ..89....8.9.....
            ...89...9.8....9
            ....89.1.99...88
            .....9.1........
            .....8..9...9...
            ....9.9.....8...
            .1....1.1..9....
            .....1.989......
            ......98...19.1.
            .....18...9.....
            ....9.....8.....
            ....8.....99....
            ..919......8.9..
            ..9.8..1.....9..
            ..8.......1..889
            .....9....11....
            ...99....9......
            ...9..9..99.....
            ......99.....11.
            ..99..89........
            ..899..89..9....
            ....8.....99.9..
            .........9...99.
            ..99.9999.....89
            ..98.98899......
            ........19......
            .........99..9..
            ....1.9.188..99.
            ....99...1....8.
            ...1......9....1
            .1...1....899...
            .......9........
            ......89....1...
            ..819...1.....1.
            ..99..1....1.1..
            ....899...99....
            ....991..9.99...
            ....981..9.89...
            .....8...1......
            ....999...198...
            ..999899....99..
            ...8..199....89.
            .....9.899......
            .....9......9...
            ...........19...
            ..999919...19...
            ..8..8.99...91..
            ...1999989..9...
            ......1.99......
            .......9...999..
            ...........98.99
            ......1....9998.
            ........9....99.
            ...9999989......
            ..9.81...99.....
            ..99....1899....
            ..........888...
            ......99........
            ....99899.999...
            ..998.8999.8.99.
            .......9...1.1.9
            ....9.19.......8
            ...9.119........
            ...9...9.999....
            ...........88...
            .....189........
            .......99.......
            ...999.8.99.....
            .998.89..89999..
            .8....9...189.99
            .....99...1.9.8.
            .....89.999999..
            ......91...11...
            .....89.........
            ....999.....9...
            .........89.9...
            .....1....9.99..
            ...9.....99..89.
            .9981.9..9....8.
            .98..99..9......
            ....9999........
            .9..98899.....99
            99...11.89....89
            .......1.8.9...8
            ....9..1...999..
            ...9...91.......
            ...89..9..9..9..
            ...98..99..99999
            ...8....9.8.999.
            ...91...9...8...
            ...9..999.......
            ..991...8.......
            ...81...........
            ..8...8.........
            .8..............
            `, SpriteKind.Enemy)
        lightning.setPosition(value2, lightningY)
        animation.runImageAnimation(
        lightning,
        [img`
            .........89.....
            ..89....8.9.....
            ...89...9.8....9
            ....89.1.99...88
            .....9.1........
            .....8..9...9...
            ....9.9.....8...
            .1....1.1..9....
            .....1.989......
            ......98...19.1.
            .....18...9.....
            ....9.....8.....
            ....8.....99....
            ..919......8.9..
            ..9.8..1.....9..
            ..8.......1..889
            .....9....11....
            ...99....9......
            ...9..9..99.....
            ......99.....11.
            ..99..89........
            ..899..89..9....
            ....8.....99.9..
            .........9...99.
            ..99.9999.....89
            ..98.98899......
            ........19......
            .........99..9..
            ....1.9.188..99.
            ....99...1....8.
            ...1......9....1
            .1...1....899...
            .......9........
            ......89....1...
            ..819...1.....1.
            ..99..1....1.1..
            ....899...99....
            ....991..9.99...
            ....981..9.89...
            .....8...1......
            ....999...198...
            ..999899....99..
            ...8..199....89.
            .....9.899......
            .....9......9...
            ...........19...
            ..999919...19...
            ..8..8.99...91..
            ...1999989..9...
            ......1.99......
            .......9...999..
            ...........98.99
            ......1....9998.
            ........9....99.
            ...9999989......
            ..9.81...99.....
            ..99....1899....
            ..........888...
            ......99........
            ....99899.999...
            ..998.8999.8.99.
            .......9...1.1.9
            ....9.19.......8
            ...9.119........
            ...9...9.999....
            ...........88...
            .....189........
            .......99.......
            ...999.8.99.....
            .998.89..89999..
            .8....9...189.99
            .....99...1.9.8.
            .....89.999999..
            ......91...11...
            .....89.........
            ....999.....9...
            .........89.9...
            .....1....9.99..
            ...9.....99..89.
            .9981.9..9....8.
            .98..99..9......
            ....9999........
            .9..98899.....99
            99...11.89....89
            .......1.8.9...8
            ....9..1...999..
            ...9...91.......
            ...89..9..9..9..
            ...98..99..99999
            ...8....9.8.999.
            ...91...9...8...
            ...9..999.......
            ..991...8.......
            ...81...........
            ..8...8.........
            .8..............
            `,img`
            .....98.........
            .....9.8....98..
            9....8.9...98...
            88...99.1.98....
            ........1.9.....
            ...9...9..8.....
            ...8.....9.9....
            ....9..1.1....1.
            ......989.1.....
            .1.91...89......
            .....9...81.....
            .....8.....9....
            ....99.....8....
            ..9.8......919..
            ..9.....1..8.9..
            988..1.......8..
            ....11....9.....
            ......9....99...
            .....99..9..9...
            .11.....99......
            ........98..99..
            ....9..98..998..
            ..9.99.....8....
            .99...9.........
            98.....9999.99..
            ......99889.89..
            ......91........
            ..9..99.........
            .99..881.9.1....
            .8....1...99....
            1....9......1...
            ...998....1...1.
            ........9.......
            ...1....98......
            .1.....1...918..
            ..1.1....1..99..
            ....99...998....
            ...99.9..199....
            ...98.9..189....
            ......1...8.....
            ...891...999....
            ..99....998999..
            .98....991..8...
            ......998.9.....
            ...9......9.....
            ...91...........
            ...91...919999..
            ..19...99.8..8..
            ...9..9899991...
            ......99.1......
            ..999...9.......
            99.89...........
            .8999....1......
            .99....9........
            ......9899999...
            .....99...18.9..
            ....9981....99..
            ...888..........
            ........99......
            ...999.99899....
            .99.8.9998.899..
            9.1.1...9.......
            8.......91.9....
            ........911.9...
            ....999.9...9...
            ...88...........
            ........981.....
            .......99.......
            .....99.8.999...
            ..99998..98.899.
            99.981...9....8.
            .8.9.1...99.....
            ..999999.98.....
            ...11...19......
            .........98.....
            ...9.....999....
            ...9.98.........
            ..99.9....1.....
            .98..99.....9...
            .8....9..9.1899.
            ......9..99..89.
            ........9999....
            99.....99889..9.
            98....98.11...99
            8...9.8.1.......
            ..999...1..9....
            .......19...9...
            ..9..9..9..98...
            99999..99..89...
            .999.8.9....8...
            ...8...9...19...
            .......999..9...
            .......8...199..
            ...........18...
            .........8...8..
            ..............8.
            `,img`
            .8..............
            ..8...8.........
            ...81...........
            ..991...8.......
            ...9..999.......
            ...91...9...8...
            ...8....9.8.999.
            ...98..99..99999
            ...89..9..9..9..
            ...9...91.......
            ....9..1...999..
            .......1.8.9...8
            99...11.89....89
            .9..98899.....99
            ....9999........
            .98..99..9......
            .9981.9..9....8.
            ...9.....99..89.
            .....1....9.99..
            .........89.9...
            ....999.....9...
            .....89.........
            ......91...11...
            .....89.999999..
            .....99...1.9.8.
            .8....9...189.99
            .998.89..89999..
            ...999.8.99.....
            .......99.......
            .....189........
            ...........88...
            ...9...9.999....
            ...9.119........
            ....9.19.......8
            .......9...1.1.9
            ..998.8999.8.99.
            ....99899.999...
            ......99........
            ..........888...
            ..99....1899....
            ..9.81...99.....
            ...9999989......
            ........9....99.
            ......1....9998.
            ...........98.99
            .......9...999..
            ......1.99......
            ...1999989..9...
            ..8..8.99...91..
            ..999919...19...
            ...........19...
            .....9......9...
            .....9.899......
            ...8..199....89.
            ..999899....99..
            ....999...198...
            .....8...1......
            ....981..9.89...
            ....991..9.99...
            ....899...99....
            ..99..1....1.1..
            ..819...1.....1.
            ......89....1...
            .......9........
            .1...1....899...
            ...1......9....1
            ....99...1....8.
            ....1.9.188..99.
            .........99..9..
            ........19......
            ..98.98899......
            ..99.9999.....89
            .........9...99.
            ....8.....99.9..
            ..899..89..9....
            ..99..89........
            ......99.....11.
            ...9..9..99.....
            ...99....9......
            .....9....11....
            ..8.......1..889
            ..9.8..1.....9..
            ..919......8.9..
            ....8.....99....
            ....9.....8.....
            .....18...9.....
            ......98...19.1.
            .....1.989......
            .1....1.1..9....
            ....9.9.....8...
            .....8..9...9...
            .....9.1........
            ....89.1.99...88
            ...89...9.8....9
            ..89....8.9.....
            .........89.....
            `,img`
            ..............8.
            .........8...8..
            ...........18...
            .......8...199..
            .......999..9...
            ...8...9...19...
            .999.8.9....8...
            99999..99..89...
            ..9..9..9..98...
            .......19...9...
            ..999...1..9....
            8...9.8.1.......
            98....98.11...99
            99.....99889..9.
            ........9999....
            ......9..99..89.
            .8....9..9.1899.
            .98..99.....9...
            ..99.9....1.....
            ...9.98.........
            ...9.....999....
            .........98.....
            ...11...19......
            ..999999.98.....
            .8.9.1...99.....
            99.981...9....8.
            ..99998..98.899.
            .....99.8.999...
            .......99.......
            ........981.....
            ...88...........
            ....999.9...9...
            ........911.9...
            8.......91.9....
            9.1.1...9.......
            .99.8.9998.899..
            ...999.99899....
            ........99......
            ...888..........
            ....9981....99..
            .....99...18.9..
            ......9899999...
            .99....9........
            .8999....1......
            99.89...........
            ..999...9.......
            ......99.1......
            ...9..9899991...
            ..19...99.8..8..
            ...91...919999..
            ...91...........
            ...9......9.....
            ......998.9.....
            .98....991..8...
            ..99....998999..
            ...891...999....
            ......1...8.....
            ...98.9..189....
            ...99.9..199....
            ....99...998....
            ..1.1....1..99..
            .1.....1...918..
            ...1....98......
            ........9.......
            ...998....1...1.
            1....9......1...
            .8....1...99....
            .99..881.9.1....
            ..9..99.........
            ......91........
            ......99889.89..
            98.....9999.99..
            .99...9.........
            ..9.99.....8....
            ....9..98..998..
            ........98..99..
            .11.....99......
            .....99..9..9...
            ......9....99...
            ....11....9.....
            988..1.......8..
            ..9.....1..8.9..
            ..9.8......919..
            ....99.....8....
            .....8.....9....
            .....9...81.....
            .1.91...89......
            ......989.1.....
            ....9..1.1....1.
            ...8.....9.9....
            ...9...9..8.....
            ........1.9.....
            88...99.1.98....
            9....8.9...98...
            .....9.8....98..
            .....98.........
            `],
        100,
        true
        )
    }
    timer.after(200, function () {
        lightningSpawned = 1
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    info.changeScoreBy(20)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
function levelCleanup () {
    tiles.destroySpritesOfKind(SpriteKind.friend)
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    tiles.destroySpritesOfKind(SpriteKind.trapLevel1)
    tiles.destroySpritesOfKind(SpriteKind.pika)
    tiles.destroySpritesOfKind(SpriteKind.flame)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    music.spooky.play()
    if (currentLevel == 0) {
        levelCleanup()
        level_1()
    }
    scene.cameraShake(4, 1500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
    let flamesPresent = 0
    if (currentLevel == 3 && flamesPresent == 0) {
        music.thump.play()
        tiles.setTileAt(location, sprites.dungeon.floorDark2)
        timer.after(100, function () {
            flames = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.flame)
            tiles.placeOnTile(flames, location)
            animation.runImageAnimation(
            flames,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 2 . . . . . . . 
                . . . . . 2 . 2 4 . . . . . . . 
                . . . . . . . 2 4 2 . . . . . . 
                . . . . . . 2 4 5 2 2 . . . . . 
                . . . . . 2 4 4 5 4 2 2 . . . . 
                . . . 2 2 2 4 5 5 4 . 2 . . . . 
                . . . 2 2 4 4 5 5 4 4 2 . . . . 
                . . . 2 2 4 5 5 5 5 4 2 . . . . 
                . . . 2 4 4 5 5 5 4 5 4 2 . . . 
                . . . 2 4 5 4 5 5 5 5 4 2 . . . 
                . . . 2 4 2 5 4 5 5 5 4 2 . . . 
                . . . . 4 5 5 5 5 5 5 4 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 . . . . . . . . . 
                . . . . . . 2 2 4 . . . . . . . 
                . . . . 2 . 2 2 4 . . . 2 . . . 
                . . . . . . 2 4 5 2 2 . . . . . 
                . . . . . 2 4 4 5 4 2 2 . . . . 
                . . . 2 2 2 4 5 5 4 . 2 . . . . 
                . . . 2 2 4 4 5 5 4 4 2 . . . . 
                . . . 2 5 5 4 4 5 5 4 2 . . . . 
                . . . 2 4 5 5 4 5 4 5 4 2 . . . 
                . . . 2 4 5 4 5 5 5 5 4 2 . . . 
                . . . 2 4 2 5 4 5 5 5 2 2 . . . 
                . . . . 2 5 5 5 5 5 2 4 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 2 . . . . . . . . 
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . 2 . 2 4 5 2 2 . . . . . 
                . . . . . 2 4 2 2 4 2 2 . . . . 
                . . . 2 2 2 4 5 2 4 . 2 . . . . 
                . . . 2 2 4 4 2 5 4 4 2 . . . . 
                . . . 2 5 5 4 4 5 2 4 2 . . . . 
                . . . 2 4 5 5 5 5 5 5 4 2 . . . 
                . . . 2 2 5 4 5 2 2 2 4 2 . . . 
                . . . 2 2 2 5 4 5 2 5 2 2 . . . 
                . . . . 2 2 2 5 5 5 5 4 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 . . . . . . . . 
                . . . . . . 2 2 2 5 . . . . . . 
                . . . . 2 . 2 2 2 2 . 2 . . . . 
                . . . . . 5 2 4 5 2 5 . . . . . 
                . . . . . 2 4 2 2 4 2 2 . . . . 
                . . . 2 2 2 2 5 2 4 . 2 . . . . 
                . . . 2 2 2 2 2 5 4 4 2 . . . . 
                . . . 2 5 5 4 5 5 2 4 2 . . . . 
                . . . 2 4 5 5 5 5 5 5 4 2 . . . 
                . . . 2 5 5 4 5 2 2 2 4 2 . . . 
                . . . 2 5 5 5 4 5 2 5 2 2 . . . 
                . . . . 2 2 5 5 5 5 5 4 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            250,
            true
            )
            timer.after(4000, function () {
                flames.destroy()
                tiles.setTileAt(location, sprites.dungeon.floorLight2)
            })
        })
    }
})
function torch () {
    if (0 == 0) {
        return
    }
    tempTilemap = tiles.copyMap(tileNow)
    tiles.loadMap(tempTilemap)
    posX = Math.round(mySprite.x / 16 + 0.5) - 1
    posY = Math.round(mySprite.y / 16 + 0.5) - 1
    for (let tileX = 0; tileX <= tiles.tilemapColumns(); tileX++) {
        for (let tileY = 0; tileY <= tiles.tilemapRows(); tileY++) {
            if (Math.abs(posX - tileX) > torchRadius || Math.abs(posY - tileY) > torchRadius) {
                tiles.setTileAt(tiles.getTileLocation(tileX, tileY), assets.tile`transparency16`)
            }
        }
    }
}
function level_1 () {
    needToUseTorch = 1
    scene.setBackgroundColor(15)
    currentLevel = 1
    tileNow = tiles.createMap(tilemap`level1`)
    tiles.loadMap(tileNow)
    torch()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.changeScoreBy(25)
    tiles.setTileAt(location, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    timer.after(150, function () {
        teleportCounter += 1
        music.sonar.play()
        if (teleportCounter >= 20 && foundTorch == 0) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 9))
            teleportCounter = 15
        } else {
            tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundNorthEast1)
            notHereYet = tiles.locationOfSprite(mySprite)
            if (teleportCounter < 10 && (tiles.locationXY(notHereYet, tiles.XY.column) == 6 && tiles.locationXY(notHereYet, tiles.XY.row) == 9)) {
                mySprite.x += -64
            }
        }
        controller.moveSprite(mySprite, 0, 0)
        recentTeleport = 1
        timer.after(300, function () {
            controller.moveSprite(mySprite, 75, 75)
            recentTeleport = 0
        })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (currentLevel == 0 && recentTeleport == 1) {
        otherSprite.y += -16
    } else {
        info.changeLifeBy(-1)
        music.buzzer.play()
        if (currentLevel == 0) {
            if (foundTorch == 0) {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.column), tiles.locationXY(tiles.locationOfSprite(otherSprite), tiles.XY.row) + 1))
                controller.moveSprite(mySprite, 0, 0)
                timer.after(150, function () {
                    controller.moveSprite(mySprite, 75, 75)
                })
            } else {
                if (recentHit == 0) {
                    otherSprite.vx = otherSprite.vx * -1
                    otherSprite.vy = otherSprite.vy * -1
                    recentHit = 1
                }
                controller.moveSprite(mySprite, 0, 0)
                timer.after(200, function () {
                    controller.moveSprite(mySprite, 75, 75)
                    recentHit = 0
                })
            }
        }
        if (currentLevel == 2) {
            controller.moveSprite(mySprite, 10, 10)
            while (mySprite.overlapsWith(otherSprite) == true) {
                info.changeLifeBy(-1)
                pause(50)
            }
            controller.moveSprite(mySprite, 75, 75)
        }
    }
})
let index = 0
let dead = 0
let recentTeleport = 0
let notHereYet: tiles.Location = null
let teleportCounter = 0
let needToUseTorch = 0
let posY = 0
let posX = 0
let tempTilemap: tiles.WorldMap = null
let flames: Sprite = null
let lightningSpawned = 0
let lightning: Sprite = null
let lightningY = 0
let lightningX: number[] = []
let mySprite2: Sprite = null
let lvl3Y = 0
let lvl3X = 0
let bashers: Sprite = null
let recentHit = 0
let walls: number[][] = []
let tempRow: string[] = []
let startingWidth = 0
let startingHeight = 0
let line: string[] = []
let maze: string[][] = []
let unvisited = ""
let wall = ""
let cell = ""
let nastyTrap = false
let nastyTrapTrigger = 0
let text_list: string[] = []
let tileNow: tiles.WorldMap = null
let bashersY: number[] = []
let bashersX: number[] = []
let pathSwitch = 0
let monkey: Sprite = null
let foundTorch = 0
let currentLevel = 0
let hasTreasureKey = 0
let sCells = 0
let torchRadius = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 75)
scene.cameraFollowSprite(mySprite)
mySprite.setFlag(SpriteFlag.Ghost, false)
info.setLife(50)
torchRadius = 1
level_0()
game.onUpdate(function () {
    if (needToUseTorch == 1) {
        torch()
    }
})
game.onUpdateInterval(1, function () {
    if (info.score() == 80) {
        tiles.setWallAt(tiles.getTileLocation(13, 7), false)
    } else {
        tiles.setWallAt(tiles.getTileLocation(13, 7), true)
    }
    if (dead == 0 && info.score() > 80) {
        dead = 1
        animation.runImageAnimation(
        mySprite,
        [img`
            ......5.5.......
            .....f555ff.....
            ....f152516f....
            ...f16666616f...
            ...f66ffff61f...
            ...f6ffddff6f...
            ..f6fdfddfdf6f..
            ..f6fd3dd3df6f..
            ..f66fddddf66f..
            .f66f3ffff3f66f.
            ..ffd353353dff..
            ..fddf3553fddf..
            ...ff333333ff...
            ...f33533533f...
            ...ffffffffff...
            .....ff..ff.....
            ................
            ................
            ................
            ................
            `,img`
            ......5.5.......
            .....f555ff.....
            ....f152516f....
            ...f16666616f...
            ...f66ffff61f...
            ...f6ffddff6f...
            ..f6fdfddfdf6f..
            ..f6fd3dd3df6f..
            ..f66fddddf66f..
            .f66f3ffff3f66f.
            ..ffd353353dff..
            ..fddf3553fddf..
            ...ff333333ff...
            ...f33533533f...
            ...ffffffffff...
            .....ff..ff.....
            .3333333333333..
            .3333333333333..
            ................
            ................
            `,img`
            555..5...5....5.
            .5..555.555..555
            .....5...5....5.
            .5..............
            555...5.5.....5.
            .5...f555ff..555
            ....f152516f..5.
            .5.f16666616f...
            555f66ffff61f...
            .5.f6ffddff6f...
            ..f6fdfddfdf6f..
            ..f6fd3dd3df6f..
            ..f66fddddf66f.f
            .f66f3ffff3f66fd
            ..ffd353353dfffd
            ..fddf3553fddddd
            ...ff333333fffff
            ...f33533533f...
            ...ffffffffff...
            .....ff..ff.....
            `,img`
            .....5...5.....5
            ....555.555...55
            .....5...5..5..5
            ..5........555..
            .555..5.5...5...
            ..5..f555ff...5.
            ....f152516f.555
            .5.f16666616f.5.
            555f66ffff61f...
            .5.f6ffddff6f...
            ..f6fdfddfdf6f..
            ..f6fd3dd3df6f..
            ..f66fddddf66f.f
            .f66f3ffff3f66fd
            ..ffd353353dfffd
            ..fddf3553fddddd
            ...ff333333fffff
            ...f33533533f...
            ...ffffffffff...
            .....ff..ff.....
            `,img`
            ....555555......
            ...5555555......
            ...5555555......
            ...5555555......
            ......5.5.......
            .....f555ff.....
            ....f152516f....
            ...f16666616f...
            ...f66ffff61f...
            ...f6ffddff6f...
            ..f6fdfddfdf6f..
            ..f6fd3dd3df6f..
            ..f66fddddf66f.f
            .f66f3ffff3f66fd
            ..ffd353353dfffd
            ..fddf3553fddddd
            ...ff333333fffff
            ...f33533533f...
            ...ffffffffff...
            .....ff..ff.....
            `,img`
            ................
            .......5........
            .......5........
            ......55..2.....
            .....55.5..2....
            ...5522222222...
            ..2221525565.2..
            .2.516655555f.2.
            ..55665255615222
            ..226f5255f65.2.
            ..25252d525f652.
            ..22252d522f652.
            2225225d5d26655f
            2f52225f5f52665d
            .5f2d25355352ff5
            55252f2553f55225
            55255523333f5f25
            .255532335335..5
            2555f525fffff555
            2555555255555555
            `],
        200,
        false
        )
        timer.after(1200, function () {
            game.over(false)
        })
    }
})
game.onUpdateInterval(800, function () {
    if (currentLevel == 2 && lightningSpawned == 1) {
        index = 0
        for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
            if (value2.x + 16 == lightningX[index] + 48) {
                value2.x += -32
            } else {
                value2.x += 16
            }
            index += 1
        }
    }
})
game.onUpdateInterval(10000, function () {
    if (foundTorch == 0 && monkey) {
        monkey.say("Find torch!", 1000)
    }
})
