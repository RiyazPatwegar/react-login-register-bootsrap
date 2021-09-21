import Layout from '../Layout';
import MaterialTable from 'material-table';

const Dashboard = (props) => {
  const columns=[
    { title: 'Id', field: 'id' },
    { title: 'Title', field: 'title' },
    { title: 'Description', field: 'body' }
  ];

    return (
        <Layout>                                      
          <div style={{ width: '100%' }}>
          <h1>Dashboard</h1>          
            <MaterialTable        
              title="User Posts"
              columns={columns}      
              options={{debounceInterval:700, padding: "dense", filtering: true, exportButton: true}}
              data={query =>                  
                  new Promise((resolve, reject) => {
                      let url = 'https://jsonplaceholder.typicode.com/posts?';
                      console.log(query);
                      url+= `_page=${query.page+1}`;
                      url+= `&_pageSize=${query.pageSize}`;

                      if(query.search){
                        url+= `&q=${query.search}`;
                      }

                      if(query.orderBy){
                        url+= `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`;
                      }

                      if(query.filters.length){
                        let filter = query.filters.map((filter) => {
                          return `&${filter.column.field}${filter.operator}${filter.value}`;
                        });

                        url+= filter.join('');
                      }

                      fetch(url).then((res) => res.json()).then(result=>{
                      // prepare your data and then call resolve like this:
                      resolve({
                          data: result,// your data array
                          page: query.page,// current page number
                          totalCount:100 // total row number
                      });
                    }).catch((err) => {
                      console.log(err);
                    })
                  })
              }
            />
          </div>                  
        </Layout>
    );
}

export default Dashboard;