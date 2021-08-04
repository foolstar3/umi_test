
// import withBreadcrumbs from 'react-router-breadcrumbs-hoc';


// const routes = [{ path: '/', breadcrumb: '首页' }];

// const Breadcrumbs = ({ data }) => {
//   if (data && Array.isArray(data)) {
//     const AntdBreadcrumb = withBreadcrumbs(data)(({ breadcrumbs }) => {
//       return (
        // <Breadcrumb separator={<Icon type="double-right" />} classNames="spread">
        //   {breadcrumbs.map((breadcrumb, index) => (
        //     <Breadcrumb.Item key={breadcrumb.key}>
        //       {breadcrumbs.length - 1 === index ? (
        //         <Badge status="processing" text={breadcrumb} />
        //       ) : (
        //         <Link
        //           to={{
        //             pathname: breadcrumb.props.match.url,
        //             state: breadcrumb.props.match.params ? breadcrumb.props.match.params : {},
        //             query: breadcrumb.props.location.query ? breadcrumb.props.location.query : {},
        //           }}
        //         >
        //           {breadcrumb}
        //         </Link>
        //       )}
        //     </Breadcrumb.Item>
        //   ))}
        // </Breadcrumb>
//       );
//     });
//     return <AntdBreadcrumb />;
//   }
//   const DefaultBreadcrumb = withBreadcrumbs(routes)(({ breadcrumbs }) => (
//     <div>
//       {breadcrumbs.map((breadcrumb, index) => (
//         <span key={breadcrumb.key}>
//           <Link
//             to={{
//               pathname: breadcrumb.props.match.url,
//               state: breadcrumb.props.match.params ? breadcrumb.props.match.params : {},
//               query: breadcrumb.props.location.query ? breadcrumb.props.location.query : {},
//             }}
//           >
//             {breadcrumb}
//           </Link>
//           {index < breadcrumbs.length - 1 && <i> / </i>}
//         </span>
//       ))}
//     </div>
//   ));
//   return <DefaultBreadcrumb />;
// };

// export default Breadcrumbs;
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Breadcrumb, Badge, Icon } from 'antd';
import {Link} from 'umi';

const Breadcrumbs = ({ breadcrumbs }) => (
  <>
  <Breadcrumb separator={<Icon type="double-right" />} className="spread">
          {breadcrumbs.map((breadcrumb, index) => {
            console.log(breadcrumb);
            
            return (
            <Breadcrumb.Item key={breadcrumb.key}>
              {/* {breadcrumbs.length - 1 === index ? (
                <Badge status="processing" text={breadcrumb} />
              ) : (
                <Link
                  to="/a"
                  // to={{
                  //   pathname: breadcrumb.props.match.url,
                  //   state: breadcrumb.props.match.params ? breadcrumb.props.match.params : {},
                  //   query: breadcrumb.props.location.query ? breadcrumb.props.location.query : {},
                  // }}
                >
                  {breadcrumb}
                </Link>
              )} */}
              <Link to={breadcrumb.key}>{breadcrumb.breadcrumb.props.children}</Link>
            </Breadcrumb.Item>
          )})}
        </Breadcrumb>
    {/* {breadcrumbs.map(({ breadcrumb }) => breadcrumb)} */}
  </>
)

export default withBreadcrumbs()(Breadcrumbs);
