import styles from "./styles.module.css";
import {Link} from "react-router-dom";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Selam</h1>
				<Link to="admin-panel" >
					<button className={styles.white_btn}>
						Admin Panel
					</button>
			    </Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;

