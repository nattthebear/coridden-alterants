import { scheduleUpdate, TPC } from "vdomk";
import { AlterantData, alterants } from "./data/alterants";
import { makeMultiMap } from "./util";
import { sequences } from "./data/sequences";

const alterantsByName = makeMultiMap(alterants.map((a) => [a.name.toLowerCase(), a]));

export const App: TPC<{}> = (_, instance) => {
	let inputValue = "";

	function onInput(ev: JSX.TargetedEvent<HTMLInputElement>) {
		inputValue = ev.currentTarget.value;
		scheduleUpdate(instance);
	}

	const sequenceButtons = sequences.map((sequence) => (
		<button
			type="button"
			onClick={() => {
				inputValue = sequence.sequence.join(" ");
				scheduleUpdate(instance);
			}}
		>
			{sequence.name}
		</button>
	));

	function renderAlterants(name: string, alterants: AlterantData[] | undefined) {
		name = alterants?.[0]?.name ?? name;
		return (
			<div>
				<h3>{name}</h3>
				{(alterants?.length ?? 0) === 0 && (
					<p>
						<em>Unknown alterant?</em>
					</p>
				)}
				{alterants && (
					<ul>
						{alterants.map((a) => (
							<li>
								<strong>Shape: </strong>
								{a.shape}
								<br />
								<strong>Ilvl: </strong>
								{a.ilvl}
								<br />
								<strong>Tags: </strong>
								{a.tags}
								<br />
								<strong>Stats:</strong>
								<ul>
									{a.stats.map((s) => (
										<li>{s}</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}

	return () => {
		const alterantStrings = inputValue.split(/[^A-Z]/im).filter((s) => s);

		return (
			<div>
				<input type="text" value={inputValue} onInput={onInput} />
				{sequenceButtons}
				<hr />
				{alterantStrings.map((s) => renderAlterants(s, alterantsByName.get(s.toLowerCase())))}
			</div>
		);
	};
};
