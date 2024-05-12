import Parts from "./Part";
import Total from "./Total";

const Content = ({ content }) => {
    const total = 0;
    const SumTotal = (content).reduce((accu, curv) => accu + curv.exercises, total);
    console.log(SumTotal);
    const totalPart = { name: 'Total of', exercises: SumTotal +" exercises" }

    return(
        <div>
            {content.map(p => <Parts key={p.id} part={p} /> )}
            <Total total={totalPart} />
        </div>
    )
  
};

export default Content;
