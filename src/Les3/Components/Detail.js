import useGithubData from '../../hooks/useGithubData';

const Detail = ({ student }) => {
    const { data, error, isLoading } = useGithubData(student.github);

    return (
        <div className="main">
            <h2>{student.name}</h2>
            {
                error && <p>{ error }</p>
            }
            {
                isLoading && <p>Loading</p>
            }
            {
                data && (
                    <>
                    {data.name && <p>{data.name}</p>}
                        <p>{data.id}</p>
                    </>
                )
            }
        </div>
    );
}

export default Detail;
