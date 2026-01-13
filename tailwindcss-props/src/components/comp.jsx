import React from 'react' 

export default function Card3({username, height, weight="70"}) {
  return (
    <div className="w-60 h-[19rem] flex flex-col rounded-xl bg-black">
      <img
        src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
        alt="test"
        className="h-40 w-full object-cover rounded-t-xl"
      />

      <div className="flex flex-col py-3 px-3 flex-1 text-white">
        <div className="flex justify-between">
          <h1 className="font-bold text-sm">{username}, {height}, {weight}</h1>
          <h1 className="text-sm">Price</h1>
        </div>
        <div className="flex justify-between text-sm">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  )
}
