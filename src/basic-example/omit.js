import React, { useMemo, useState } from 'react';
import data from "../movies";
import DataTable from "react-data-table-component";

const App = () => {
    const [hideDirector, setHideDirector] = useState(false);

    const columns = useMemo(() => [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Director',
            selector: row => row.director,
            sortable: true,
            omit: hideDirector,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ], [hideDirector]);

    return (
        <>
            <button onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</button>
            <DataTable
                title="Movie List"
                columns={columns}
                data={data}
            />
        </>
    );
};

export default App