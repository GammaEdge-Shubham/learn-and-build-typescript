import { useState } from "react"

const Form: React.FC = () => {
    const [form, setForm] = useState<{ name: string, id: number }>({ name: '', id: 0 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: [e.target.value] });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Name: ${form.name}, ID: ${form.id}`);
        console.log("Form submitted successfully");
    }

    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type="number"
                        name="id"

                        placeholder="Enter your id"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                    >Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form;