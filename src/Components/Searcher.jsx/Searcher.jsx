import Input from "../Input/Imput";

function Searcher({searcherState, setSearcherState, searcherCheckState, setSearcherCheckState, setSearcherCheckState_2}) {

    const evaluateCheck = (e)=>{
        setSearcherCheckState(e.target.checked)
    };
    const evaluateCheck_2 = (e)=>{
        setSearcherCheckState_2(e.target.checked)
    };

    return (
        <div className="w-full max-w-md">

            <Input type='text' placeholder={searcherCheckState?'Buscar por Nombre o ID':'Buscar solo por Nombre'} state={searcherState} setState={setSearcherState} label='Buscador' idInput='searcher' classLabel='sr-only' classInput='relative block focus:w-full w-64 appearance-none rounded-none rounded-md hover:border hover:border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 text-center focus:z-10 focus:border focus:border-indigo-500 focus:outline-none focus:ring-indigo-500' classDiv='flex justify-center p-3' />

            <div className="flex items-center justify-center">
                <input type='checkbox' id='for_name' onChange={evaluateCheck} className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ' />
                <label htmlFor="for_name" className="ml-2 block text-sm text-gray-900">Buscar por Nombre o ID</label>
            </div>
            <div className="flex items-center justify-center">
                <input type='checkbox' id='for_organize' onChange={evaluateCheck_2} className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ' />
                <label htmlFor="for_organize" className="ml-2 block text-sm text-gray-900">Ordenar nombres de A-Z</label>
            </div>

        </div>
    );
};

export default Searcher;
