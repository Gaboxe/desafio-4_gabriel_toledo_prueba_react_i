import { useState, useEffect } from "react";


function MiApi({ info, setInfo, filterFunction, checkOrganize }) {

    const [reb, setReb] = useState(info)

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        const url = `https://rickandmortyapi.com/api/character/`;
        const response = await fetch(url);
        const data = await response.json();
        setInfo(data.results);

    }

    let newCardsOrganize = !checkOrganize? info : reb.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    })

    const newCardsFilter = newCardsOrganize.filter((personaje) => filterFunction(personaje));

    return (
        <div>
            <ul className="flex flex-wrap justify-center">
                {newCardsFilter.map(({ id, name, image }) => {
                    return (

                        <li className="felx felx-col m-2 w-72 border border-sky-500 " key={id}>
                            <div className="text-start">
                                <span className="border-r border-b border-sky-500 px-3">id</span>
                                <span className="pl-2">{id}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-start pl-6">nombre : </span>
                                <span>{name}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-start pl-6"> </span>
                                <span><img src={image} alt="" /></span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
export default MiApi;