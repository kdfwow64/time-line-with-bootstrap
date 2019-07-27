import React, { Component } from 'react'
import Granim from 'react-granim'
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
const data = [
	{
		 "id":1,
		 "days_until":0,
		 "description":"Enjoy an all-night celebration with access to the Moresocial VIP area.",
		 "happens_at":"Saturday, July 22 @ 12AM",
		 "hours_until":16,
		 "name":"All-Night Rooftop Concert",
		 "purchasable":true,
		 "url":"/demo/concert",
		 "slug":"concert",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Concert.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Video/concert.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-2.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-6.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-6.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-8.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-8.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-4.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Concert/Moresocial-Live-Demo-4.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":1,
					 "description":"VIP Access to the Moresocial section and lounge area",
					 "name":"VIP",
					 "price_in_cents":4500,
					 "fee_fixed_amount_in_cents":0
				},
				{
					 "id":2,
					 "description":"Duis doctrina fidelissimae se cernantur sunt excepteur. Arbitror iis quorum ad officia aute duis senserit noster.",
					 "name":"General Admission",
					 "price_in_cents":1000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":2,
		 "days_until":7,
		 "description":"Bottomless waterside brunch all afternoon.",
		 "happens_at":"Sunday, June 23 @  1PM",
		 "hours_until":5,
		 "name":"Bottomless Sunday Brunch",
		 "purchasable":true,
		 "url":"/demo/bottomless-brunch",
		 "slug":"bottomless-brunch",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Brunch.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/brunch.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":3,
					 "description":"Enjoy unlimited food and amazing music all afternoon",
					 "name":"Bottomless",
					 "price_in_cents":3000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":2,
		 "days_until":7,
		 "description":"Bottomless waterside brunch all afternoon.",
		 "happens_at":"Sunday, June 23 @  1PM",
		 "hours_until":5,
		 "name":"Bottomless Sunday Brunch",
		 "purchasable":true,
		 "url":"/demo/bottomless-brunch",
		 "slug":"bottomless-brunch",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Brunch.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/brunch.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":3,
					 "description":"Enjoy unlimited food and amazing music all afternoon",
					 "name":"Bottomless",
					 "price_in_cents":3000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":2,
		 "days_until":7,
		 "description":"Bottomless waterside brunch all afternoon.",
		 "happens_at":"Sunday, June 23 @  1PM",
		 "hours_until":5,
		 "name":"Bottomless Sunday Brunch",
		 "purchasable":true,
		 "url":"/demo/bottomless-brunch",
		 "slug":"bottomless-brunch",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Brunch.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/brunch.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":3,
					 "description":"Enjoy unlimited food and amazing music all afternoon",
					 "name":"Bottomless",
					 "price_in_cents":3000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":2,
		 "days_until":7,
		 "description":"Bottomless waterside brunch all afternoon.",
		 "happens_at":"Sunday, June 23 @  1PM",
		 "hours_until":5,
		 "name":"Bottomless Sunday Brunch",
		 "purchasable":true,
		 "url":"/demo/bottomless-brunch",
		 "slug":"bottomless-brunch",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Brunch.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/brunch.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":3,
					 "description":"Enjoy unlimited food and amazing music all afternoon",
					 "name":"Bottomless",
					 "price_in_cents":3000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":2,
		 "days_until":7,
		 "description":"Bottomless waterside brunch all afternoon.",
		 "happens_at":"Sunday, June 23 @  1PM",
		 "hours_until":5,
		 "name":"Bottomless Sunday Brunch",
		 "purchasable":true,
		 "url":"/demo/bottomless-brunch",
		 "slug":"bottomless-brunch",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Brunch.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/brunch.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":3,
					 "description":"Enjoy unlimited food and amazing music all afternoon",
					 "name":"Bottomless",
					 "price_in_cents":3000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":2,
		 "days_until":7,
		 "description":"Bottomless waterside brunch all afternoon.",
		 "happens_at":"Sunday, June 23 @  1PM",
		 "hours_until":5,
		 "name":"Bottomless Sunday Brunch",
		 "purchasable":true,
		 "url":"/demo/bottomless-brunch",
		 "slug":"bottomless-brunch",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Brunch.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/brunch.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":3,
					 "description":"Enjoy unlimited food and amazing music all afternoon",
					 "name":"Bottomless",
					 "price_in_cents":3000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":2,
		 "days_until":7,
		 "description":"Bottomless waterside brunch all afternoon.",
		 "happens_at":"Sunday, June 23 @  1PM",
		 "hours_until":5,
		 "name":"Bottomless Sunday Brunch",
		 "purchasable":true,
		 "url":"/demo/bottomless-brunch",
		 "slug":"bottomless-brunch",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Brunch.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/brunch.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Brunch/Moresocial-Live-Demo-Brunch-2.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":3,
					 "description":"Enjoy unlimited food and amazing music all afternoon",
					 "name":"Bottomless",
					 "price_in_cents":3000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":3,
		 "days_until":2,
		 "description":"An exhilarating ride with priceless views of Manhattan and the Statue of Liberty.",
		 "happens_at":"Sunday, July 21 @  1PM",
		 "hours_until":5,
		 "name":"Statue of Liberty Flight Tour",
		 "purchasable":true,
		 "url":"/demo/flight-tour",
		 "slug":"flight-tour",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Flight.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/flight.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":4,
					 "description":"Friday, July 5 flight package for (2) guests",
					 "name":"July 5",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				},
				{
					 "id":5,
					 "description":"Saturday, July 6 flight package for (2) guests",
					 "name":"July 6",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":4,
		 "days_until":3,
		 "description":"An exhilarating ride with priceless views of Manhattan and the Statue of Liberty.",
		 "happens_at":"Sunday, July 22 @  1PM",
		 "hours_until":5,
		 "name":"Statue of Liberty Flight Tour",
		 "purchasable":true,
		 "url":"/demo/flight-tour",
		 "slug":"flight-tour",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Flight.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/flight.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":4,
					 "description":"Friday, July 5 flight package for (2) guests",
					 "name":"July 5",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				},
				{
					 "id":5,
					 "description":"Saturday, July 6 flight package for (2) guests",
					 "name":"July 6",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":5,
		 "days_until":3,
		 "description":"An exhilarating ride with priceless views of Manhattan and the Statue of Liberty.",
		 "happens_at":"Sunday, July 30 @  1PM",
		 "hours_until":5,
		 "name":"Statue of Liberty Flight Tour",
		 "purchasable":true,
		 "url":"/demo/flight-tour",
		 "slug":"flight-tour",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Flight.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/flight.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":4,
					 "description":"Friday, July 5 flight package for (2) guests",
					 "name":"July 5",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				},
				{
					 "id":5,
					 "description":"Saturday, July 6 flight package for (2) guests",
					 "name":"July 6",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":6,
		 "days_until":3,
		 "description":"An exhilarating ride with priceless views of Manhattan and the Statue of Liberty.",
		 "happens_at":"Sunday, July 26 @  1PM",
		 "hours_until":5,
		 "name":"Statue of Liberty Flight Tour",
		 "purchasable":true,
		 "url":"/demo/flight-tour",
		 "slug":"flight-tour",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Flight.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/flight.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":4,
					 "description":"Friday, July 5 flight package for (2) guests",
					 "name":"July 5",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				},
				{
					 "id":5,
					 "description":"Saturday, July 6 flight package for (2) guests",
					 "name":"July 6",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	},
	{
		 "id":7,
		 "days_until":3,
		 "description":"An exhilarating ride with priceless views of Manhattan and the Statue of Liberty.",
		 "happens_at":"Sunday, July 28 @  1PM",
		 "hours_until":5,
		 "name":"Statue of Liberty Flight Tour",
		 "purchasable":true,
		 "url":"/demo/flight-tour",
		 "slug":"flight-tour",
		 "venue":{
				"id":1,
				"address":"45 Rockefeller Plaza, New York, NY",
				"description":null,
				"fee_rate":0.03,
				"latitude":40.7583395,
				"longitude":-73.9792303,
				"name":"Pier 19",
				"picture_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Profiles/Concert.jpg",
				"slug":"demo",
				"tax_rate":0.08875,
				"url":"/demo"
		 },
		 "media":[
				{
					 "media_type":"video",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/VideoPreview/Flight.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/flight.webm"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-1.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-2.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-3.jpg"
				},
				{
					 "media_type":"photo",
					 "preview_url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg",
					 "url":"https://storage.googleapis.com/live.moresocial.ly/Demo/Flight/Moresocial-Live-Demo-Flight-4.jpg"
				}
		 ],
		 "packages":[
				{
					 "id":4,
					 "description":"Friday, July 5 flight package for (2) guests",
					 "name":"July 5",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				},
				{
					 "id":5,
					 "description":"Saturday, July 6 flight package for (2) guests",
					 "name":"July 6",
					 "price_in_cents":20000,
					 "fee_fixed_amount_in_cents":0
				}
		 ]
	}
];

for(var i=0;i<data.length;i++) {
	data[i]['short_date'] = data[i]['happens_at'].match(/, (.*?) @/)[1];
	var date_array = data[i]['short_date'].split(' ');
	data[i]['short_date'] = date_array[1]+' '+date_array[0];
}
data.sort(function(a, b){
    if(a.short_date < b.short_date) return -1;
    if(a.short_date > b.short_date) return 1;
    return 0;
});
var temp = -1;
var grouped_data = [];
var group = [];
console.log(data);
for(i=0;i<data.length;i++) {
	
	if(temp!=data[i]['short_date']) {
		temp = data[i]['short_date'];
		if("short_date" in group) {
			grouped_data.push(group);
			group = [];
		}
		group['short_date'] = data[i]['short_date'];
		group['temp'] = [];
		group['temp'].push(data[i]);
		if(i == (data.length-1))
			grouped_data.push(group);
	} else {
		group['temp'].push(data[i]);
		if(i == (data.length-1))
			grouped_data.push(group);
	}
}
console.log(grouped_data);
const granim_gradient_options = {
	"default-state": {
		"gradients": [
			['#0732A7', '#6845A0'],
			['#6845A0', '#F1815F'],
			['#F1815F', '#0732A7']
		],
		"transitionSpeed": 7000
	}
}

const granim_direction_options = {
	"x0": '100%',
	'y0': '40%',
	'x1': '0%',
	'y1': '60%'
}

class App extends Component {
	// constructor() {
  //   super();
  //   this._handleClick = this._handleClick.bind(this);
	// }
	// componentDidMount() {
  //   this._handleClick();
	// }
	// _handleClick() {
  //   const acc = this._acc.children;
  //   for (let i = 0; i < acc.length; i++) {
  //     let a = acc[i];
  //     a.onclick = () => a.classList.toggle("active");
  //   }
  // }
	handleCheck(e) {
		var ss = e.target.innerText().replace(' ', '');
	}
  render() {
    return (
      	<div className="App" style={{ height: '100vh' }}>
			<div style={{ position: 'fixed'}} className="background">
				<Granim direction="diagonal" states={granim_gradient_options} customDirection={granim_direction_options} />
			</div>
			<div className="MainContent">
				<Container>
					<Row className="CircleRow">
						<div className="CircleScroll">
						{
							grouped_data.map((item, index) => {
								if(index == 0)
									return (
										<div className="text-align-span">
											<span className="circle-mobile active" onClick={this.handleCheck}>{item.short_date}</span>
										</div>
									)
								else
									return (
										<div className="text-align-span">
											<span className="circle-mobile" onClick={this.handleCheck}>{item.short_date}</span>
										</div>
									)
							})
						}
						</div>
					</Row>
					{
						grouped_data.map((item, index) => {
							var clas = item.short_date.replace(' ', '');
							clas = "each-date-row " + clas;
							return (
								<Row ref={a => this._acc = a}
									className={clas}
								>
									<div
										className="timeline-div"
									>
										<span className="circle">{item.short_date}</span>
									</div>
									<Row
										className="inner-row"
									>
										<div className="innerRowScroll">
										{
											item.temp.map((it, idx) => {
												return (
													<div className="one-third-item">
														<div className="video-element-div" style={{ backgroundImage: "url("+it.media[0].preview_url+")" }}>
															<div className="camera-div">
																<FontAwesomeIcon icon={faFacebook} className="camera-icon"></FontAwesomeIcon>
															</div>
															<div className="txt-div">
																<div className="big-txt">
																	{it.venue.address}
																</div>
																<div className="small-txt">
																	{it.happens_at.replace(' @', ',')}
																</div>
															</div>
														</div>
													</div>
												)
											})
										}
										</div>
									</Row>
								</Row>
							)
						})
					}
				</Container>
			</div>
      	</div>
    );
  }
}

export default App;
