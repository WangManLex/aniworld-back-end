import { Profile } from '../models/profile.js'
import { Anime } from '../models/anime.js'

function getProfile(req, res) {
    Profile.findById(req.params.id)
        .then(profile => {
            res.json(profile)
        })
}

function getWatching(req, res) {
    Anime.find({ currentlyWatching: req.params.id })
    .then(animes => {
        res.json(animes)
    })
}

export {
    getProfile,
    getWatching
}