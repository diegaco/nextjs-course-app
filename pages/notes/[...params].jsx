import React, {useEffect} from 'react';
import { useRouter } from 'next/router';

const Note = () => {
  const router = useRouter();
  const { params } = router.query;
  // params.forEach(param => console.log(param));
  console.log(params);
  return <h1>Note Page With Params</h1>;
}

export default Note;