import { useEffect, useState } from "react";
import { z } from "zod";
import Model from "../components/Model";

const ModelSchema = z.object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
})

type ModelType = z.infer<typeof ModelSchema>

function ListModels() {
    const [models, setModels] = useState<ModelType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("http://localhost:8080/model/list");
                if (!res.ok) {
                    throw new Error("Failed to fetch the response");
                }
                const data = await res.json();
                setModels(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return <>Still loading</>;
    }

    if (error != null) {
        return <>{error}</>
    }
    console.log(models);
    return <>Listing here:
        <ul>

            {models.map((model) => <li className="pb-2">
                <Model name={model.name} age={model.age} />
            </li>
            )}
        </ul>
    </>
}

export default ListModels;