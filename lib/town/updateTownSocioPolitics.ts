import { assign } from '../src/utils'

import { townData } from './townData'
import { Town } from './_common'

export function updateTownSocioPolitics (town: Town) {
  const economicIdeologyData = townData.economicIdeology[town.economicIdeology]
  const politicalIdeologyData = townData.politicalIdeology[town.politicalIdeology]

  if (town.economicIdeologyIST !== economicIdeologyData.descriptors.economicIdeologyIST) {
    town.economicIdeology = economicPairs[town.economicIdeologyIST]
  }

  if (town.politicalIdeologyIC !== politicalIdeologyData.data.politicalIdeologyIC) {
    town.politicalIdeology = politicalIdeologyPairs[town.politicalIdeologyIC]
  }

  assign(town, economicIdeologyData.descriptors)
  assign(town, politicalIdeologyData.data)
}

const economicPairs = {
  feudalist: 'feudalism',
  capitalist: 'capitalism',
  syndicalist: 'syndicalism',
  primitivist: 'primitivism',
  communist: 'communism'
} as const

const politicalIdeologyPairs = {
  autocratic: 'autocracy',
  meritocratic: 'meritocracy',
  democratic: 'democracy',
  kleptocratic: 'kleptocracy',
  magocratic: 'magocracy',
  militocratic: 'militocracy',
  oligarchic: 'oligarchy',
  pedocratic: 'pedocracy',
  theocratic: 'theocracy',
  technocratic: 'technocracy'
} as const

export type EconomicIdeologyIST = keyof typeof economicPairs

export type PoliticalIdeologyIC = keyof typeof politicalIdeologyPairs
