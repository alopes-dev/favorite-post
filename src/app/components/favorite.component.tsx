'use client'
export default function FavoritePostListPage() {
  return (
    <div
      className={'w-full h-full px-6 pb-3 pt-9 my-0.5 bg-white'}
      style={{ marginTop: 60 }}
    >
      <h1 className="text-black">Lista de posto favoritos</h1>

      <ul className="list-disc px-8 pt-2">
        <li className="text-black">Posto Ipiranga 1</li>
        <li className="text-black">Posto Ipiranga 2</li>
        <li className="text-black">Posto Ipiranga 3</li>
      </ul>
    </div>
  )
}
