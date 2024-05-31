export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.append(mathFunction);
  } catch (e) {
    queue.append(e);
  } finally {
    queue.append('Guardrail was processed');
  }
}
