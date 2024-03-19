import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase.js'
import { useQuery } from 'react-query';


const Results = () => {
    return useQuery(
      'list',
      async () => {
        const q = query(
            collection(db, 'crud')
        );
        const querySnapshot = await getDocs(q);
        const list = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        }));
        console.log(list)
        console.log('데이터수신')
        return list;
      },
      
    )
  };

  export default Results;

 
